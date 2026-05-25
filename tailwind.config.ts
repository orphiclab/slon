import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slonGold: "#FFD400",
        slonBlue: "#112753",
        slonBg: "#FBF6F6",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
