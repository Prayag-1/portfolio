"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "prayag-cookie-consent-dismissed";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setVisible(true);
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 430);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <aside
      role="status"
      style={{
        position: "fixed",
        right: isMobile ? 12 : 16,
        left: isMobile ? 12 : "auto",
        bottom: 12,
        zIndex: 60,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "center",
        maxWidth: isMobile ? "none" : 520,
        gap: isMobile ? 12 : 16,
        padding: isMobile ? "14px 16px" : "12px 14px",
        borderRadius: 10,
        background: "#18181b",
        color: "#fff",
        fontSize: 13,
        lineHeight: 1.45,
        boxShadow: "0 12px 35px rgba(0,0,0,.18)"
      }}
    >
      <p style={{ margin: 0 }}>This site doesn&apos;t use tracking cookies. The contact form is powered by Formspree. Anonymous visit analytics via Vercel Analytics — no personal data collected.</p>
      <button
        type="button"
        onClick={dismiss}
        style={{
          minHeight: 44,
          minWidth: isMobile ? 44 : 44,
          flex: "0 0 auto",
          border: "1px solid #71717a",
          borderRadius: 999,
          padding: isMobile ? "10px 16px" : "8px 14px",
          background: "transparent",
          color: "#fff",
          fontSize: 13,
          alignSelf: isMobile ? "stretch" : "center"
        }}
      >
        Got it
      </button>
    </aside>
  );
}
