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
        brand: {
          dark: "#070D1D",
          navy: "#0B132B",
          navyLight: "#1C2541",
          blue: "#1E40AF",
          royal: "#2563EB",
          cyan: "#0EA5E9",
          red: "#C80A0A",
          redDark: "#990000",
          redLight: "#E63946",
          gold: "#FAC800",
          goldDark: "#D99B00",
          amber: "#F59E0B",
          silver: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
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
