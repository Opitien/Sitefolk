"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_NAME = "sitefolk_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no decision has been stored yet
    const stored = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function setCookieDecision(value: "accepted" | "declined") {
    // 1 year expiry
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    setVisible(false);
  }

  function handleAccept() {
    setCookieDecision("accepted");
    // Initialise Google Analytics here if needed:
    // gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  function handleDecline() {
    setCookieDecision("declined");
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop overlay on mobile */}
      <div
        aria-hidden="true"
        className="cookie-backdrop"
        onClick={handleDecline}
      />

      <div
        role="dialog"
        aria-label="Cookie consent"
        aria-modal="true"
        className="cookie-banner"
      >
        <div className="cookie-inner">
          {/* Text content */}
          <p className="cookie-text">
            We use cookies to improve your experience and run Google Analytics.
            By clicking <strong>Accept All</strong> you agree to our{" "}
            <Link href="/cookies" className="cookie-link">
              Cookie Policy
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="cookie-actions">
            <button
              id="cookie-decline-btn"
              onClick={handleDecline}
              className="cookie-btn cookie-btn--decline"
            >
              Decline
            </button>
            <button
              id="cookie-accept-btn"
              onClick={handleAccept}
              className="cookie-btn cookie-btn--accept"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cookie-backdrop {
          display: none;
        }

        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: #111111;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 16px;
          animation: cookieSlideUp 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }

        .cookie-inner {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cookie-text {
          font-size: 14px;
          line-height: 1.55;
          color: rgba(245,242,234,0.8);
          margin: 0;
        }

        .cookie-text strong {
          color: #F5F2EA;
        }

        .cookie-link {
          color: #93c5fd;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .cookie-link:hover {
          color: #bfdbfe;
        }

        .cookie-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cookie-btn {
          flex: 1 1 0;
          min-width: 110px;
          padding: 11px 18px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          white-space: nowrap;
          text-align: center;
        }

        .cookie-btn:active {
          transform: scale(0.97);
        }

        .cookie-btn--accept {
          background: #2563eb;
          color: #ffffff;
        }

        .cookie-btn--accept:hover {
          opacity: 0.9;
        }

        .cookie-btn--decline {
          background: transparent;
          color: #F5F2EA;
          border: 1px solid rgba(245,242,234,0.25);
        }

        .cookie-btn--decline:hover {
          border-color: rgba(245,242,234,0.5);
        }

        /* Tablet and up: single row layout */
        @media (min-width: 640px) {
          .cookie-banner {
            padding: 16px 24px;
          }

          .cookie-inner {
            flex-direction: row;
            align-items: center;
            gap: 20px;
          }

          .cookie-text {
            flex: 1;
          }

          .cookie-actions {
            flex-shrink: 0;
            flex-wrap: nowrap;
          }

          .cookie-btn {
            flex: none;
            width: auto;
          }
        }

        @keyframes cookieSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}
