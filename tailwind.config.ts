import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        surface: "#FAFAF7",
        dark: "#101B38",
        "dark-surface": "#182852",
        "text-main": "#101B38",
        "text-muted": "#53627B",
        royalNavy: "#101B38",
        royalBlue: "#2255D6",
        electricCoral: "#F04446",
        goldenYellow: "#FFC83D",
        softIvory: "#FAFAF7",
        brandSlate: "#53627B",
        accent: {
          DEFAULT: "#F04446",
          hover: "#D63335",
          light: "#FEF2F2",
          dark: "#B91C1C",
        },
        "border-ui": "#E2E8F0",
        brand: {
          dark: "#0B1326",
          navy: "#101B38",
          navyLight: "#182852",
          blue: "#2255D6",
          royal: "#2255D6",
          coral: "#F04446",
          cyan: "#0EA5E9",
          red: "#F04446",
          redDark: "#B91C1C",
          redLight: "#FF6B6D",
          gold: "#FFC83D",
          goldDark: "#E5B02E",
          amber: "#FFC83D",
          silver: "#FAFAF7",
          ivory: "#FAFAF7",
          slate: "#53627B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-outfit)", "system-ui", "sans-serif"],
        brand: ["var(--font-brand)", "Plus Jakarta Sans", "Montserrat", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "3d": "0 20px 40px -15px rgba(11, 19, 43, 0.15), 0 0 0 1px rgba(11, 19, 43, 0.05)",
        "3d-glow": "0 20px 50px -10px rgba(37, 99, 235, 0.25), 0 0 20px rgba(200, 10, 10, 0.15)",
        "3d-red": "0 20px 40px -15px rgba(200, 10, 10, 0.35)",
        "card-hover": "0 30px 60px -12px rgba(11, 19, 43, 0.2), 0 18px 36px -18px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
