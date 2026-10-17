"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, writeConsent, type Consent } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const choose = (value: Consent) => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <div className="cookie" role="region" aria-label="Cookie notice">
      <div className="container cookie__inner">
        <div className="cookie__text">
          <p className="cookie__title">Cookie preferences</p>
          <p>
            This site stores an essential cookie to remember your choice. No analytics or advertising cookies are
            currently active. You can choose whether optional cookies may be used if introduced.
          </p>
        </div>
        <div className="cookie__actions">
          <button type="button" className="btn btn--outline" onClick={() => choose("rejected")}>
            Essential only
          </button>
          <button type="button" className="btn btn--primary" onClick={() => choose("accepted")}>
            Allow optional
          </button>
        </div>
      </div>
    </div>
  );
}
