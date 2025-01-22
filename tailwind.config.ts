import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundA: "backgroundA",
        foreground: "var(--foreground)",
        primary: "#2B71F0",
        secondary: "#001A40",
        tertiary: "#BCBDC0"
      },
    },
  },
  plugins: [],
} satisfies Config;
