import type { Metadata } from "next";
import {
  LegalLayout,
  OPERATOR_EMAIL,
  SHOP_HOST,
} from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies and similar storage are used on ${SHOP_HOST}.`,
  robots: { index: false },
};

const UPDATED_AT = "2026-04-24";

// Be explicit about what is and is NOT active today. When analytics or
// consent-based cookies are added, update this page and ship a consent banner
// in the same change.
export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updatedAt={UPDATED_AT}
      leadIn={`This notice describes what cookies and similar browser-side storage ${SHOP_HOST} uses today. It is kept deliberately narrow — any additional tracking will be added here, together with a consent mechanism, before it is activated.`}
    >
      <h2>1. Cookies currently set by this site</h2>
      <p>
        No first-party cookies are currently written by <strong>{SHOP_HOST}</strong>. The site is
        statically generated and, in its present pre-launch configuration, does not require a
        session cookie.
      </p>

      <h2>2. Browser storage we do use</h2>
      <p>
        The site uses <code>localStorage</code> — a browser-side storage mechanism, <em>not</em> a
        cookie — for one purpose only:
      </p>
      <ul>
        <li>
          <strong>Quotation list persistence</strong> — key{" "}
          <code>virasmart.quotation.v1</code>. Holds the products you have added to your quotation
          list so the list survives a page refresh. Cleared when you submit the request or clear
          the list. Never sent anywhere until you explicitly submit the quotation.
        </li>
      </ul>
      <p>
        You can clear this entry at any time from your browser’s developer tools (Application →
        Local Storage) or by using “Clear list” on the{" "}
        <a href="/quotation">quotation page</a>.
      </p>

      <h2>3. Third-party cookies</h2>
      <p>
        Today the site loads no third-party tracking scripts and sets no advertising or
        cross-site-tracking cookies. If analytics (e.g. Vercel Analytics, GA4) or a consent banner
        are added, this section will be updated <em>before</em> activation and a consent mechanism
        will be presented on first visit.
      </p>

      <h2>4. How to control cookies and storage</h2>
      <p>
        You can block or delete cookies and local storage at any time through your browser
        settings. Note that clearing storage will erase any in-progress quotation list.
      </p>

      <h2>5. Changes and contact</h2>
      <p>
        This policy will be updated in lock-step with any change to the site’s tracking surface.
        Questions:{" "}
        <a href={`mailto:${OPERATOR_EMAIL}`}>{OPERATOR_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
