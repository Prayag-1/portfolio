import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#18181b", color: "#fff", fontFamily: "sans-serif" }}><div style={{ fontSize: 86, fontWeight: 700 }}>Prayag Nepal</div><div style={{ marginTop: 18, fontSize: 32, color: "#a1a1aa" }}>Web Developer · Kathmandu, Nepal</div></div>, { width: 1200, height: 630 });
}
