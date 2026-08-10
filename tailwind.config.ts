import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-whites, layered
        paper: {
          50: "#FDFCF9",
          100: "#FAF8F3",
          200: "#F3F0E9",
          300: "#E9E5DB",
        },
        // Ink — warm near-black
        ink: {
          950: "#0F0E0B",
          900: "#1A1815",
          800: "#2A2723",
          700: "#3D3934",
          600: "#57524B",
          500: "#7A7469",
          400: "#948E82",
          300: "#B3AD9F",
          200: "#D0CABD",
          100: "#E3DED2",
        },
        // Accent — soft light blue (calm, medical, pairs with warm paper)
        sage: {
          900: "#1E3A54",
          800: "#2C4E6E",
          700: "#3E6E96",
          600: "#5487AF",
          500: "#6E9AC0",
          400: "#94B4CE",
          300: "#B7CBDD",
          200: "#D5E1EC",
          100: "#E9F0F6",
          50: "#F4F8FB",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        micro: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
