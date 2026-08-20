import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#101012",
        surface: "#17171A",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.18)",
        ink: "#F2F0EA",
        muted: "#9A968D",
        accent: "#E8A54A",
        available: "#6FA287",
      },
      fontFamily: {
        sans: ['"General Sans"', "Arial", "sans-serif"],
        mono: ['"Geist Mono"', '"SFMono-Regular"', "Consolas", "monospace"],
      },
      boxShadow: {
        quiet: "0 18px 40px rgba(0, 0, 0, 0.22)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
