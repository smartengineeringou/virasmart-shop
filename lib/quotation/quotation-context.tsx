"use client";

// Quotation context — this is the B2B analogue of a cart.
// Key difference from retail: items have no prices and "submit" sends a
// request for quote, it does not charge anyone.
//
// Backed by useSyncExternalStore so hydration from localStorage happens
// through React's official subscription model (no setState-in-effect).

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { QuotationLineItem, Product } from "@/lib/shopify/types";

const STORAGE_KEY = "virasmart.quotation.v1";

// Module-scoped store. On the server every call returns the empty snapshot;
// on the client we hydrate lazily and notify subscribers on every mutation.
type Listener = () => void;

let items: QuotationLineItem[] = [];
let hydrated = false;
const listeners = new Set<Listener>();

function ensureHydrated() {
  if (hydrated || typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) items = JSON.parse(raw) as QuotationLineItem[];
  } catch {
    items = [];
  }
  hydrated = true;
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // quota or private-mode — silently ignore
  }
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  ensureHydrated();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  ensureHydrated();
  return items;
}

function getServerSnapshot(): QuotationLineItem[] {
  return EMPTY;
}

const EMPTY: QuotationLineItem[] = [];

function setItems(next: QuotationLineItem[]) {
  items = next;
  persist();
  emit();
}

interface QuotationContextValue {
  items: QuotationLineItem[];
  itemCount: number;
  addItem: (product: Product, quantity?: number, note?: string) => void;
  removeItem: (productHandle: string) => void;
  updateQuantity: (productHandle: string, quantity: number) => void;
  updateNote: (productHandle: string, note: string) => void;
  clear: () => void;
  hasItem: (productHandle: string) => boolean;
}

const QuotationContext = createContext<QuotationContextValue | null>(null);

export function QuotationProvider({ children }: { children: React.ReactNode }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback<QuotationContextValue["addItem"]>(
    (product, quantity = 1, note = "") => {
      const existing = items.find((i) => i.productHandle === product.handle);
      if (existing) {
        setItems(
          items.map((i) =>
            i.productHandle === product.handle
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          ),
        );
        return;
      }
      setItems([
        ...items,
        {
          productHandle: product.handle,
          sku: product.sku,
          title: product.title,
          vendor: product.vendor,
          quantity,
          note,
          addedAt: Date.now(),
        },
      ]);
    },
    [],
  );

  const removeItem = useCallback((productHandle: string) => {
    setItems(items.filter((i) => i.productHandle !== productHandle));
  }, []);

  const updateQuantity = useCallback((productHandle: string, quantity: number) => {
    setItems(
      items.map((i) =>
        i.productHandle === productHandle
          ? { ...i, quantity: Math.max(1, quantity) }
          : i,
      ),
    );
  }, []);

  const updateNote = useCallback((productHandle: string, note: string) => {
    setItems(items.map((i) => (i.productHandle === productHandle ? { ...i, note } : i)));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const hasItem = useCallback(
    (productHandle: string) => current.some((i) => i.productHandle === productHandle),
    [current],
  );

  const value = useMemo<QuotationContextValue>(
    () => ({
      items: current,
      itemCount: current.length,
      addItem,
      removeItem,
      updateQuantity,
      updateNote,
      clear,
      hasItem,
    }),
    [current, addItem, removeItem, updateQuantity, updateNote, clear, hasItem],
  );

  return <QuotationContext.Provider value={value}>{children}</QuotationContext.Provider>;
}

export function useQuotation() {
  const ctx = useContext(QuotationContext);
  if (!ctx) {
    throw new Error("useQuotation must be used inside <QuotationProvider>");
  }
  return ctx;
}
