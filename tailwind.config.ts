import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        surface: "#FFFFFF",
        line: "#E5E5E7",
        ink: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#3452FF",
        available: "#2FA84F",
      },
      fontFamily: {
        sans: ['"Geist"', '"Geist Sans"', "Arial", "sans-serif"],
        mono: ['"Geist Mono"', '"SFMono-Regular"', "Consolas", "monospace"],
      },
      boxShadow: {
        quiet: "0 18px 40px rgba(29, 29, 31, 0.06)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
