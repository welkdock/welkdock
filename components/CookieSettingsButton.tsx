"use client";

import { CONSENT_EVENT } from "@/lib/consent";

export default function CookieSettingsButton() {
  return (
    <button type="button" className="footer__linkbtn" onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}>
      Cookie settings
    </button>
  );
}
