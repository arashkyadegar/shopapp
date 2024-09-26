import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        full: "100%"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        iransSans: ['iransSans'],
      },
    },
    minWidth: {
      "0": "0",
      "24": "6rem",
      "32": "8rem",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    }
  },
  variants: {
    rotate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"]
  },
  plugins: [],
};
export default config;
