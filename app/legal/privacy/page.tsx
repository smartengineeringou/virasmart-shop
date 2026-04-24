import type { Metadata } from "next";
import {
  LegalLayout,
  OPERATOR_EMAIL,
  OPERATOR_NAME,
  OPERATOR_WEBSITE,
  SHOP_HOST,
} from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Virasmart processes personal data submitted through shop.virasmart.eu.",
  robots: { index: false },
};

const UPDATED_AT = "2026-04-24";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updatedAt={UPDATED_AT}
      leadIn={`This notice explains how ${OPERATOR_NAME} processes personal data submitted through ${SHOP_HOST}. It is written in plain language and follows the principles of the EU General Data Protection Regulation (GDPR).`}
    >
      <h2>1. Who is the operator</h2>
      <p>
        The operator of {SHOP_HOST} is <strong>{OPERATOR_NAME}</strong>. The main website is{" "}
        <a href={OPERATOR_WEBSITE}>{OPERATOR_WEBSITE.replace(/^https?:\/\//, "")}</a>. Questions or
        data-subject requests should be sent to{" "}
        <a href={`mailto:${OPERATOR_EMAIL}`}>{OPERATOR_EMAIL}</a>. Full legal-entity details (registry
        number, VAT, registered address) are being finalised and will be published here before public
        launch.
      </p>

      <h2>2. What data we collect</h2>
      <p>This site is a B2B engineering catalogue. It is <strong>not</strong> a retail checkout. The only personal data we actively collect is what you submit through the quotation request form:</p>
      <ul>
        <li>Contact name and company name</li>
        <li>Work email address and (optional) phone number</li>
        <li>Country and project context you choose to provide</li>
        <li>The list of catalogue items you attach to the request</li>
      </ul>
      <p>
        In addition, the site stores a small amount of data locally in your browser via{" "}
        <code>localStorage</code> so that your in-progress quotation list survives a page refresh.
        This data never leaves your device until you explicitly submit the request.
      </p>

      <h2>3. Why we process this data (legal basis)</h2>
      <ul>
        <li>
          <strong>Pre-contractual measures</strong> (Art. 6(1)(b) GDPR) — we process your quotation
          request in order to prepare a technical quotation and respond to your enquiry.
        </li>
        <li>
          <strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR) — limited server logs for
          security, abuse prevention, and basic traffic analytics.
        </li>
      </ul>

      <h2>4. How long we keep it</h2>
      <p>
        Quotation requests are retained for as long as reasonably necessary to serve the enquiry and
        any resulting project, and then for the retention period required by applicable bookkeeping
        law. We do not sell personal data, and we do not use it for unrelated marketing.
      </p>

      <h2>5. Who receives the data</h2>
      <p>
        Internally: the Virasmart engineering and sales team. Externally, we use service providers
        strictly necessary to operate the site:
      </p>
      <ul>
        <li><strong>Vercel Inc.</strong> — hosting and content delivery (EU/US, GDPR SCCs).</li>
        <li><strong>Resend</strong> — transactional email delivery for quotation requests (when enabled).</li>
      </ul>
      <p>We do not share your data with anyone else without a lawful basis.</p>

      <h2>6. Cookies and analytics</h2>
      <p>
        Before public launch this site uses only strictly necessary cookies (session, security). If
        and when analytics or consent-based cookies are added, they will be disclosed in the{" "}
        <a href="/legal/cookies">Cookie Policy</a> and gated behind a consent banner.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under the GDPR you can request access, rectification, erasure, restriction, portability, or
        object to processing at any time. Send the request to{" "}
        <a href={`mailto:${OPERATOR_EMAIL}`}>{OPERATOR_EMAIL}</a>. You also have the right to lodge a
        complaint with your national data-protection authority.
      </p>

      <h2>8. Changes to this notice</h2>
      <p>
        We will update this notice as the site matures. The “Last updated” date at the top reflects
        the current version.
      </p>
    </LegalLayout>
  );
}
