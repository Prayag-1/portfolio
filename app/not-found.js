import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "96px 24px", textAlign: "center", background: "#f8f8f7" }}><div><p style={{ margin: 0, color: "#4F46E5", fontSize: "clamp(5rem, 16vw, 10rem)", fontWeight: 600, letterSpacing: "-.08em", lineHeight: .9 }}>404</p><h1 style={{ margin: "28px 0 10px", fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-.05em" }}>This page doesn&apos;t exist.</h1><p style={{ margin: "0 auto 28px", maxWidth: 420, color: "#6B7280" }}>You might have followed a broken link or typed the URL incorrectly.</p><Link className="button button-primary" href="/">Back to home</Link></div></main>;
}
