import type { Metadata } from "next";
import {
  LegalLayout,
  OPERATOR_EMAIL,
  OPERATOR_NAME,
  SHOP_HOST,
} from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SHOP_HOST} — a B2B engineering catalogue.`,
  robots: { index: false },
};

const UPDATED_AT = "2026-04-24";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updatedAt={UPDATED_AT}
      leadIn={`These terms govern access to ${SHOP_HOST}. They are separate from any commercial agreement that may arise from a quotation.`}
    >
      <h2>1. What this site is</h2>
      <p>
        {SHOP_HOST} is a B2B engineering catalogue operated by <strong>{OPERATOR_NAME}</strong>. It
        showcases technical products for professional installers, integrators, and buyers. There is
        no retail checkout — ordering begins with a Request for Quotation (RFQ).
      </p>

      <h2>2. No offer, no public pricing</h2>
      <p>
        Information published on this site is for information purposes only and does not constitute
        an offer to sell. No prices are shown; pricing is issued per project after review. Product
        availability, lead times, and technical specifications may change without notice and are
        confirmed only in a signed quotation.
      </p>

      <h2>3. Quotation requests</h2>
      <p>
        Submitting a quotation request does not create a binding contract. Any resulting sale is
        governed by a separate written quotation and the commercial terms agreed with our sales
        team. Please submit accurate contact and project details so we can respond meaningfully.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        All trademarks (Virasmart, Ekinex, Thermofin, Displine, and others) belong to their
        respective owners. The site’s text, layout, and graphics are the property of their
        respective rights-holders and are made available for professional reference. You may
        download datasheets for project use; redistribution as a standalone product is not
        permitted without written consent.
      </p>

      <h2>5. Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt, probe, or scrape the site beyond reasonable automated access for search-engine indexing.</li>
        <li>Do not use the RFQ form to transmit unsolicited marketing, automated requests, or unlawful content.</li>
        <li>Do not impersonate another company when submitting a request.</li>
      </ul>

      <h2>6. Third-party links</h2>
      <p>
        The site links to virasmart.eu and to vendor datasheets hosted by third parties. We are not
        responsible for the content or availability of those external resources.
      </p>

      <h2>7. Disclaimer and liability</h2>
      <p>
        The site is provided on an “as is” basis. While we strive for technical accuracy, we cannot
        guarantee that every specification is complete, current, or fit for a specific application —
        projects should be validated against a signed quotation and, where applicable, vendor
        documentation. To the maximum extent permitted by law, {OPERATOR_NAME} is not liable for
        indirect or consequential damages arising from reliance on published catalogue content.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the law applicable at the operator’s registered seat. The
        specific jurisdiction will be confirmed in the operator details published alongside public
        launch.
      </p>

      <h2>9. Contact</h2>
      <p>
        For any question about these terms, write to{" "}
        <a href={`mailto:${OPERATOR_EMAIL}`}>{OPERATOR_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
