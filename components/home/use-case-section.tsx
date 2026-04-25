import Link from "next/link";

const outcomes = [
  "Lighting scenes and presence-aware automation",
  "Room temperature, heating and cooling (HVAC)",
  "Shading, blinds, and curtain automation",
  "Energy monitoring and per-circuit metering",
  "Remote control and visualisation from any room",
];

const useCaseLines = [
  "A guest panel near the door drives lighting scenes, blinds and the welcome scene.",
  "A wall thermostat reports temperature on the KNX bus; the AHU controller modulates the chilled-water valve.",
  "An energy meter reports per-circuit consumption — billed back to the room.",
];

export function UseCaseSection() {
  return (
    <section
      aria-label="How the system works in real projects"
      className="rounded-2xl bg-foreground text-background p-8 sm:p-12 lg:p-16"
    >
      <div className="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center">
        {/* ─── Visual block (top on mobile, left on desktop) ─────── */}
        <div>
          <RoomSchematic className="w-full h-auto max-w-md mx-auto md:mx-0 text-background" />
        </div>

        {/* ─── Content ──────────────────────────────────────────── */}
        <div className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-smart">
            How it works in real projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
            Control your building from a single interface.
          </h2>

          <ul className="space-y-2.5">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 rounded-full shrink-0 bg-smart"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed max-w-xl text-background/70">
            One KNX system connects sensors, actuators and visualisation into a
            coordinated building-control layer. The final logic is configured
            and commissioned according to the project architecture.
          </p>

          {/* ─── Mini use-case (hotel suite) ─────────────────────── */}
          <div className="border-l-2 border-smart pl-5 py-1 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-background/60">
              Example — hotel suite
            </p>
            <ul className="space-y-1.5 text-sm text-background/80">
              {useCaseLines.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-background/40">
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Secondary CTA ───────────────────────────────────── */}
          <div className="pt-2">
            <Link
              href="/quotation"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-background/30 px-4 py-2.5 rounded hover:bg-background hover:text-foreground transition-colors"
            >
              Send your project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 7h8m-3-3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stylised room schematic (architectural-drawing tone) ─────────
function RoomSchematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      role="img"
      aria-label="Wall-mounted tablet on a KNX bus controlling lighting, thermostat, blinds and HVAC"
      className={className}
    >
      <defs>
        <pattern id="vs-grid-uc" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M20 0H0V20"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#vs-grid-uc)" />

      {/* dotted connection lines from tablet to each device */}
      <g stroke="var(--vs-accent-smart)" strokeWidth="1" strokeDasharray="2 4" fill="none">
        <path d="M160 110 L70 50" />
        <path d="M160 110 L260 60" />
        <path d="M160 130 L60 200" />
        <path d="M160 130 L260 200" />
      </g>

      {/* central tablet (flush wall mount) — 4 abstract UI tiles inside */}
      <g>
        <rect
          x="130"
          y="92"
          width="60"
          height="56"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="138" y="100" width="20" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="162" y="100" width="20" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="138" y="122" width="20" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="162" y="122" width="20" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
      </g>

      {/* light bulb — top-left */}
      <g stroke="var(--vs-accent-smart)" strokeWidth="1.5" fill="none">
        <circle cx="60" cy="40" r="8" />
        <path d="M56 50v3M64 50v3" />
      </g>

      {/* thermostat — top-right */}
      <g stroke="var(--vs-accent-smart)" strokeWidth="1.5" fill="none">
        <circle cx="270" cy="50" r="10" />
        <path d="M270 44v6l4 2" strokeLinecap="round" />
      </g>

      {/* blinds — bottom-left */}
      <g stroke="var(--vs-accent-smart)" strokeWidth="1.5">
        <path d="M48 192h24M48 200h24M48 208h24" />
      </g>

      {/* HVAC waves — bottom-right */}
      <g stroke="var(--vs-accent-smart)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M252 196c4-3 8-3 12 0s8 3 12 0" />
        <path d="M252 204c4-3 8-3 12 0s8 3 12 0" />
        <path d="M252 212c4-3 8-3 12 0s8 3 12 0" />
      </g>

      {/* KNX BUS caption under tablet */}
      <g>
        <line
          x1="120"
          y1="160"
          x2="200"
          y2="160"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text
          x="160"
          y="174"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          fill="currentColor"
          fillOpacity="0.5"
          textAnchor="middle"
          letterSpacing="0.1em"
        >
          KNX BUS
        </text>
      </g>
    </svg>
  );
}