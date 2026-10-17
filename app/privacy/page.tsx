import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Welkdock Technologies collects, uses and protects personal information on its website and in its software.",
  path: "/privacy/",
});

const email = (
  <a href={`mailto:${site.email}`}>{site.email}</a>
);

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Who we are and scope",
    body: (
      <>
        <p>
          Welkdock is a software company incorporated in India. We build packages for Flutter and React Native,
          security testing tools, mobile apps for businesses and NGOs, and AI software for hiring.
        </p>
        <p>
          This policy applies to the Website and to correspondence with us. Individual products may handle information
          differently. Where a product collects personal information, we will describe that in a product-specific
          privacy notice, in the product documentation or in its app store listing. That notice applies in addition to
          this policy and prevails over it for that product.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <p>
          If you email us, we receive your email address, your name if you include it, the content of your message and
          any attachments you send. We receive only what you choose to share.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          When you visit the Website, our hosting and network providers may record technical information in server
          logs, such as your IP address, browser type and version, device type, the pages requested, referring address
          and the date and time of the request. We use this only to deliver the Website, keep it secure and diagnose
          faults.
        </p>
        <h3>Information we do not collect through the Website</h3>
        <p>
          The Website has no user accounts, no payment forms and no comment or sign-up forms. We do not knowingly
          collect sensitive personal data through it, and we ask you not to send any in your emails.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    body: (
      <>
        <ul>
          <li>To respond to your enquiries, support requests and partnership or press messages.</li>
          <li>To operate, secure and maintain the Website, and to detect and prevent abuse, fraud and unlawful activity.</li>
          <li>To comply with legal obligations and to establish, exercise or defend legal claims.</li>
          <li>To improve our website and products, using information that does not identify you wherever possible.</li>
        </ul>
        <p>We do not sell personal information and we do not use it to build advertising profiles.</p>
      </>
    ),
  },
  {
    id: "basis",
    title: "Consent and legal basis",
    body: (
      <>
        <p>
          We process personal information on the basis of your consent (for example, when you choose to email us), to
          perform or prepare to perform a request you make, to comply with legal obligations, and for our legitimate
          interests in running and securing the Website, to the extent those interests are not overridden by your
          rights.
        </p>
        <p>
          We handle personal data in line with the Digital Personal Data Protection Act, 2023 and the Information
          Technology Act, 2000 of India, and, for visitors in the European Economic Area or the United Kingdom, in line
          with the General Data Protection Regulation as it applies to us. You may withdraw consent at any time by
          writing to us. Withdrawal does not affect processing carried out before it.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and disclosure",
    body: (
      <>
        <p>We share personal information only in these circumstances:</p>
        <ul>
          <li>
            With service providers that help us run the Website and our email, such as hosting, domain and email
            providers, who may process information only for the services they provide to us.
          </li>
          <li>With professional advisers such as lawyers, auditors and insurers, under duties of confidentiality.</li>
          <li>
            With a successor if we merge with, are acquired by, or sell part of our business, subject to this policy
            continuing to apply.
          </li>
          <li>Where disclosure is required or permitted by law, as described in the next section.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-requests",
    title: "Legal requests and misuse of our software",
    body: (
      <>
        <p>
          We may preserve and disclose information to courts, law enforcement agencies, regulators and other
          government authorities where we believe in good faith that we are required to do so by law, legal process or
          a binding order, or that disclosure is reasonably necessary to protect the rights, property or safety of
          Welkdock, our users or the public, or to investigate suspected misuse of our software or the Website for
          unlawful purposes.
        </p>
        <p>
          Welkdock is not responsible for how third parties use our software. See section 5 of our{" "}
          <Link href="/terms/#responsibility">Terms and Conditions</Link>.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <>
        <p>
          The Website sets one first-party cookie, named welkdock_consent, to remember whether you chose Essential only
          or Allow optional. It is essential to the cookie notice, lasts 180 days and contains no personal information.
          You can change your choice at any time using Cookie settings in the footer.
        </p>
        <p>
          At the date of this policy the Website does not set advertising or tracking cookies and does not use
          third-party analytics. Fonts and scripts are served from our own domain. If we add optional cookies such as
          analytics, they will be used only if you chose Allow optional, and we will update this policy first.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    body: (
      <p>
        We keep emails and the information in them for as long as needed to deal with your request and for a
        reasonable period afterwards, unless the law requires or permits us to keep them longer, for example to
        resolve disputes or meet accounting and legal duties. Server logs are kept for a short period set by our
        hosting provider and then deleted or anonymised.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organisational safeguards to protect personal information, including
        encrypted connections to the Website. No method of transmission or storage is completely secure, so we cannot
        guarantee absolute security. If a personal data breach occurs that the law requires us to report, we will
        notify the affected individuals and the relevant authority as required.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights and choices",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>ask for a summary of the personal information we hold about you and how we process it;</li>
          <li>ask us to correct, complete or update inaccurate information;</li>
          <li>ask us to erase your personal information, subject to legal retention duties;</li>
          <li>withdraw your consent;</li>
          <li>
            object to or ask us to restrict certain processing, and ask for a portable copy of your information where
            the GDPR applies;
          </li>
          <li>
            nominate another person to exercise your rights if you die or become incapacitated, where the DPDP Act
            applies; and
          </li>
          <li>make a complaint to the Data Protection Board of India or to your local data protection authority.</li>
        </ul>
        <p>
          To use any of these rights, email {email}. We may need to verify your identity first. We will respond within
          the time required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        The Website is not directed at children under 18. We do not knowingly collect personal information from
        anyone under 18 without verifiable consent from a parent or legal guardian. If you believe a child has sent
        us personal information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        Our service providers may store or process information on servers located outside India. Where we transfer
        personal information across borders, we do so in accordance with applicable law and take reasonable steps to
        ensure it remains protected.
      </p>
    ),
  },
  {
    id: "links",
    title: "Third-party links",
    body: (
      <p>
        The Website or our products may link to websites and services we do not operate, such as app stores or code
        repositories. Their privacy practices are their own, and this policy does not apply to them. Please read their
        policies before you use them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date at the top shows when it last
        changed. If a change is material, we will give reasonable notice on the Website. Continuing to use the Website
        after an update means you accept the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact and grievances",
    body: (
      <>
        <p>
          For questions about this policy, to exercise your rights, or to raise a grievance about how we handle
          personal data, contact:
        </p>
        <p>
          {site.legalName} (Welkdock Technologies)
          <br />
          Email: {email}
        </p>
        <p>We will acknowledge grievances promptly and aim to resolve them within the period required by applicable law.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={site.updated}
      intro={
        <p>
          This Privacy Policy explains how {site.legalName}, operating as Welkdock Technologies (&quot;Welkdock&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), handles personal information when you visit welkdock.com
          (the &quot;Website&quot;) or contact us. It should be read together with our{" "}
          <Link href="/terms/">Terms and Conditions</Link>.
        </p>
      }
      sections={sections}
    />
  );
}
