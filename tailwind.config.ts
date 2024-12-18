import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "var(--font-size-medium)",
      },
      colors: {
        black: "var(--black)",
        "very-dark-grey": "var(--very-dark-grey)",
        input: "var(--input)",
        "input-dark": "var(--input-dark)",
        "dark-grey": "var(--dark-grey)",
        "lines-dark": "var(--lines)",
        "medium-grey": "var(--medium-grey)",
        "lines-light": "var(--lines-light)",
        "light-grey": "var(--light-grey)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        error: "var(--error)",
        "error-hover": "var(--error-hover)",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
