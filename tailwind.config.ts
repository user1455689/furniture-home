import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
        primaryDark: "#E3584E",

        secondary: "#6C5CE7",

        accentTeal: "#00CEC9",
        accentYellow: "#FDCB6E",

        bg: "#FAFAFA",
        surface: "#FFFFFF",
        border: "#E5E5E5",

        textPrimary: "#222222",
        textSecondary: "#777777",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)",
      },

      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },

      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

