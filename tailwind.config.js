/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-nacelle)", "Arial", "sans-serif"],
        nacelle: ["var(--font-nacelle)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "0" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "0" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "0" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "0" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "0" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "0" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "0" }],
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
