/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
      },
      gridTemplateColumns: {
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        gray: {
          100: "#1f2937",
          200: "#111827",
          300: "rgba(0, 0, 0, 0)",
          400: "rgba(0, 0, 0, 0.5)",
        },
        darkslategray: "#374151",
        whitesmoke: "#f9fafb",
        aliceblue: "#eff6ff",
        slateblue: "#1e40af",
        white: "#fff",
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0)",
        dodgerblue: "#3b82f6",
        dimgray: "#4b5563",
        darkgray: "#9ca3af",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        nunito: "Nunito",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      xl: "20px",
      "4xl": "23px",
      "21xl": "40px",
      sm: "14px",
      "29xl": "48px",
      "base-6": "15.6px",
      "base-9": "15.9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
