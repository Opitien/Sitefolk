"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="sitefolk_cookie_consent"
      style={{
        background: "#111111",
        color: "#F5F2EA",
        fontSize: "14px",
        padding: "16px 24px",
        alignItems: "center",
        borderTop: "1px solid #2a2a2a",
      }}
      buttonStyle={{
        background: "#2563eb",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "500",
        padding: "10px 20px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#F5F2EA",
        fontSize: "14px",
        fontWeight: "400",
        padding: "10px 16px",
        borderRadius: "4px",
        border: "1px solid rgba(245, 242, 234, 0.3)",
        cursor: "pointer",
      }}
      contentStyle={{
        flex: "1",
        margin: "0 16px 0 0",
      }}
      onAccept={() => {
        // Here you would initialise Google Analytics
        // Example: gtag('consent', 'update', { analytics_storage: 'granted' })
      }}
      onDecline={() => {
        // Keep analytics blocked
      }}
    >
      We use cookies to improve your experience and run Google Analytics. By clicking{" "}
      <strong>Accept All</strong> you agree to our{" "}
      <a
        href="/cookies"
        style={{ color: "#93c5fd", textDecoration: "underline" }}
      >
        Cookie Policy
      </a>
      .
    </CookieConsent>
  );
}
