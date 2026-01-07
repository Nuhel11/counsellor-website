import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Broadest scan for src folder
  ],
  theme: {
    extend: {
      colors: {
        therapy: {
          sage: "#7A8C7A",
          stone: "#F5F5F4",
          softBlue: "#9DB2BF",
          charcoal: "#2D3436",
        },
      },
    },
  },
  plugins: [],
};
export default config;