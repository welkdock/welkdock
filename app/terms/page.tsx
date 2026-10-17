import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "The terms that govern use of the Welkdock Technologies website, software, plugins, packages and mobile apps.",
  path: "/terms/",
});

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these Terms",
    body: (
      <>
        <p>
          By accessing the Website, or by downloading, installing, copying or using any of the Services, you agree to
          be bound by these Terms and by our <Link href="/privacy/">Privacy Policy</Link>. If you do not agree, do not
          access or use the Services. If you use the Services on behalf of a company or other organisation, you
          confirm that you have authority to bind it, and &quot;you&quot; includes that organisation.
        </p>
        <p>
          These Terms are an electronic record under the Information Technology Act, 2000 and the rules made under it.
          They do not require any physical or digital signature.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <p>
        You must be at least 18 years old and legally capable of entering into a binding contract under applicable
        law, including the Indian Contract Act, 1872. If you are younger, you may use the Services only under the
        supervision of a parent or legal guardian who accepts these Terms on your behalf and takes responsibility for
        your use.
      </p>
    ),
  },
  {
    id: "licence",
    title: "Licence to use our software",
    body: (
      <>
        <p>
          Subject to these Terms, Welkdock grants you a limited, non-exclusive, non-transferable, non-sublicensable and
          revocable licence to install and use our software for lawful personal or internal business purposes, in line
          with its documentation. Software is licensed, not sold. We reserve all rights not expressly granted.
        </p>
        <p>
          Where a product states that it is released under an open-source or other specific licence, that licence
          governs your rights in that product. These Terms continue to apply to your use of the Website and, to the
          extent that licence permits, to the disclaimers, limitations of liability and indemnities below.
        </p>
        <p>
          Unless the law or an applicable open-source licence permits it, you must not copy, modify, decompile, reverse
          engineer, resell, rent, sublicense or distribute our software.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not use the Services, directly or indirectly, to:</p>
        <ul>
          <li>
            commit, plan, facilitate, assist or conceal any criminal offence or any other act that is unlawful in India
            or in the place where you are located, including fraud, theft, extortion, harassment, stalking, blackmail
            or impersonation;
          </li>
          <li>
            gain unauthorised access to, interfere with, disrupt or damage any computer, device, network, account,
            service or data, or create, deploy or distribute malware, ransomware, spyware or other harmful code;
          </li>
          <li>
            monitor, track, profile or collect personal information about any person without their lawful consent or
            legal authority;
          </li>
          <li>infringe the intellectual property, privacy, publicity or other rights of any person;</li>
          <li>
            create, store, share or distribute content that is unlawful, that sexually exploits or endangers children,
            or that promotes terrorism or violence;
          </li>
          <li>
            launder money, finance terrorism, evade sanctions, or breach export control or trade restrictions;
          </li>
          <li>
            test, scan, load or simulate attacks against any system, network or service that you do not own or do not
            have explicit written authorisation to test, including when using security or load testing tools made by
            Welkdock;
          </li>
          <li>
            bypass or disable security, licensing or usage controls, or probe, scan or test the vulnerability of our
            systems without our written permission;
          </li>
          <li>
            break the terms of any app store, platform or third-party service through which you obtain or use the
            Services;
          </li>
          <li>
            use the Services in systems where failure could reasonably lead to death, injury or serious damage, such as
            medical life support, aviation control or nuclear facilities; or
          </li>
          <li>overload, scrape or interfere with the Website, or misrepresent your relationship with Welkdock.</li>
        </ul>
      </>
    ),
  },
  {
    id: "responsibility",
    title: "Your responsibility for how you use the software",
    body: (
      <>
        <p>
          Our software consists of general-purpose tools. Welkdock does not monitor, supervise, direct or control how
          any person uses them, and has no knowledge of or control over the purposes for which they are used.
        </p>
        <p>You alone are responsible for:</p>
        <ul>
          <li>your use of the Services and every result of that use;</li>
          <li>
            complying with all laws, regulations and third-party rights that apply to you and to what you do with the
            Services;
          </li>
          <li>
            obtaining every consent, licence and authorisation you need, including from individuals whose data you
            process;
          </li>
          <li>the data and content you create, store, process or transmit using the Services;</li>
          <li>
            complying with employment, anti-discrimination and data protection laws when you use AI software to screen,
            interview or shortlist candidates, and for every hiring decision you make about a person; and
          </li>
          <li>backing up your data and testing the software before relying on it.</li>
        </ul>
        <p>
          The fact that a general-purpose tool can be misused does not make Welkdock responsible for that misuse.
        </p>
      </>
    ),
  },
  {
    id: "no-liability",
    title: "No liability for unlawful or unauthorised use",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Welkdock and its directors, officers, employees, contractors,
          affiliates and licensors are not responsible or liable for any act, omission, conduct, content or consequence
          arising from the use of the Services by you or by any third party that is unlawful, unauthorised or in breach
          of these Terms. This includes any loss, damage, claim, penalty, investigation or proceeding that results from
          such use.
        </p>
        <p>
          Any person who uses the Services for an unlawful purpose does so entirely at their own risk. Criminal and
          civil liability arising from that use rests solely with that person. We do not endorse, approve or encourage
          any unlawful use, and no use of the Services by anyone makes Welkdock a participant in, or accomplice to,
          their conduct.
        </p>
        <p>
          You agree not to bring any claim against Welkdock for loss or damage caused by another person&apos;s misuse of
          the Services.
        </p>
      </>
    ),
  },
  {
    id: "enforcement",
    title: "Enforcement, cooperation and termination",
    body: (
      <>
        <p>
          We may, at our discretion and with or without notice, investigate suspected breaches of these Terms, remove
          or restrict access to the Services, suspend or terminate your licence, and take any other action we consider
          appropriate.
        </p>
        <p>
          We may report suspected unlawful activity to, and cooperate with, law enforcement agencies, regulators and
          courts, and may disclose information in response to lawful requests, orders or legal process, or where we
          believe in good faith that disclosure is necessary to prevent harm or to comply with law.
        </p>
        <p>
          You may stop using the Services at any time by uninstalling the software and ceasing to use the Website.
          Sections that by their nature should survive termination, including sections 5 to 8 and 11 to 16, will
          survive.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        The Services, including software, documentation, design, text, graphics and the Welkdock name and logo, are
        owned by Welkdock or its licensors and are protected by intellectual property laws. Except for the licence in
        section 3, nothing in these Terms transfers any right, title or interest to you. You may not use the Welkdock
        name or logo without our prior written permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Open-source components and third parties",
    body: (
      <p>
        Our software may include or interoperate with open-source components and third-party services. Those are
        governed by their own licences and terms, which we do not control. We are not responsible for third-party
        software, websites or services, or for any loss that arises from using them.
      </p>
    ),
  },
  {
    id: "feedback",
    title: "Feedback",
    body: (
      <p>
        If you send us suggestions, ideas or other feedback, you grant Welkdock a perpetual, irrevocable, worldwide,
        royalty-free licence to use and incorporate it into our Services without any obligation or payment to you.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimer of warranties",
    body: (
      <>
        <p className="legal__caps">
          The Services are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind,
          whether express, implied or statutory. To the fullest extent permitted by law, Welkdock disclaims all
          warranties, including warranties of merchantability, fitness for a particular purpose, title,
          non-infringement, accuracy, reliability, availability and security.
        </p>
        <p>
          We do not warrant that the Services will be uninterrupted, error-free or free of harmful components, that
          defects will be corrected, or that the Services will meet your requirements. Pre-release and beta software
          may be incomplete and may change or be withdrawn at any time. You use the Services at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p className="legal__caps">
          To the fullest extent permitted by law, Welkdock and its directors, officers, employees, contractors,
          affiliates and licensors will not be liable for any indirect, incidental, special, consequential, exemplary or
          punitive damages, or for any loss of profits, revenue, data, goodwill or business, or business interruption,
          arising out of or in connection with the Services or these Terms, even if advised of the possibility of such
          loss.
        </p>
        <p className="legal__caps">
          The total aggregate liability of Welkdock for all claims arising out of or relating to the Services or these
          Terms will not exceed the greater of the amount you paid to Welkdock for the relevant Service in the twelve
          months before the claim arose and INR 1,000 (one thousand Indian rupees).
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law,
          including liability for fraud or wilful misconduct. Where the law does not allow a particular exclusion or
          limit, it applies only to the extent the law permits.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    body: (
      <>
        <p>
          You agree to defend, indemnify and hold harmless Welkdock and its directors, officers, employees,
          contractors, affiliates and licensors from and against all claims, demands, liabilities, damages, losses,
          fines, penalties, costs and expenses, including reasonable legal fees, arising out of or related to:
        </p>
        <ul>
          <li>your use or misuse of the Services;</li>
          <li>your breach of these Terms or of any applicable law;</li>
          <li>your infringement of any third party&apos;s rights; or</li>
          <li>any data or content you process, store or transmit using the Services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to the Services and to these Terms",
    body: (
      <p>
        We may modify, suspend or discontinue any part of the Services at any time, with or without notice. We may
        update these Terms by posting a revised version on the Website with a new &quot;Last updated&quot; date. Your
        continued use of the Services after a change takes effect means you accept the revised Terms. If you do not
        accept them, you must stop using the Services.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and dispute resolution",
    body: (
      <>
        <p>These Terms are governed by the laws of India, without regard to conflict-of-law rules.</p>
        <p>
          If a dispute arises, the parties will first try in good faith to resolve it by written negotiation for 30
          days after one party notifies the other by email. If it is not resolved, it will be referred to and finally
          settled by arbitration under the Arbitration and Conciliation Act, 1996 before a sole arbitrator appointed in
          accordance with that Act. The seat and venue of arbitration will be the city in India where Welkdock&apos;s
          registered office is located, the language will be English, and the award will be final and binding.
        </p>
        <p>
          Subject to the above, the courts at that city have exclusive jurisdiction over any matter that is not
          arbitrable or that requires interim relief.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "General provisions",
    body: (
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms, our Privacy Policy and any product-specific licence form the
          entire agreement between you and Welkdock about the Services.
        </li>
        <li>
          <strong>Severability.</strong> If any provision is found unenforceable, the rest remains in effect and the
          provision will be enforced to the maximum extent permitted.
        </li>
        <li>
          <strong>No waiver.</strong> A failure or delay in enforcing a right is not a waiver of that right.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign or transfer these Terms without our written consent. We may
          assign them in connection with a merger, acquisition or sale of assets.
        </li>
        <li>
          <strong>Force majeure.</strong> We are not liable for any failure or delay caused by events beyond our
          reasonable control.
        </li>
        <li>
          <strong>No agency.</strong> Nothing in these Terms creates a partnership, joint venture, agency or
          employment relationship between you and Welkdock.
        </li>
        <li>
          <strong>Notices.</strong> We may give notice by posting on the Website or by email. You may give notice to us
          at the email address below.
        </li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact and reporting misuse",
    body: (
      <>
        <p>
          Questions about these Terms, and reports of suspected misuse or abuse of our software, can be sent to:
        </p>
        <p>
          {site.legalName} (Welkdock Technologies)
          <br />
          Email: {email}
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated={site.updated}
      intro={
        <>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website at welkdock.com
            (the &quot;Website&quot;) and of all software, plugins, packages, libraries, mobile applications,
            documentation and related services made available by {site.legalName}, operating as Welkdock Technologies
            (&quot;Welkdock&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) (together, the
            &quot;Services&quot;).
          </p>
          <p>
            Please read these Terms carefully. They limit our liability and place responsibility for the use of our
            software on the person using it.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
