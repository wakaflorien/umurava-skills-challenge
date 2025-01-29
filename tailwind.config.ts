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
        backgroundA: "#F1F1F1",
        foreground: "var(--foreground)",
        primary: "#2B71F0",
        secondary: "#001A40",
        tertiary: "#F1F1F1",
        tertiaryColor: "#687588",
        success: "#0F973D"
      },
      fontFamily: {
        sans: ['var(--font-work-sans)']
      }
    },
  },
  plugins: [],
} satisfies Config;
