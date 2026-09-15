import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2b2d6e",
          dark: "#1b1c46",
          light: "#4547a0",
        },
        accent: {
          DEFAULT: "#0f9d8c",
          dark: "#0b7a6d",
        },
        risk: {
          low: "#1a9e5c",
          medium: "#d69e00",
          high: "#e0473d",
        },
        status: {
          research: "#2f6fed",
          pilot: "#d69e00",
          approved: "#1a9e5c",
          production: "#0f9d3c",
          rejected: "#e0473d",
          deprecated: "#6b6f80",
        },
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 22, 31, 0.06)",
        "card-hover": "0 12px 32px rgba(20, 22, 31, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.4s ease both",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

export default config;
