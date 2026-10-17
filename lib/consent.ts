export const CONSENT_COOKIE = "welkdock_consent";
export const CONSENT_EVENT = "welkdock:cookie-settings";
export type Consent = "accepted" | "rejected";

export function readConsent(): Consent | null {
  const entry = document.cookie.split("; ").find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  const value = entry?.split("=")[1];
  return value === "accepted" || value === "rejected" ? value : null;
}

export function writeConsent(value: Consent) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax${secure}`;
}
