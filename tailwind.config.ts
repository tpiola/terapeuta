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
        primary: "#a855f7",
        "primary-dark": "#7c3aed",
        "primary-light": "#c084fc",
        brand: {
          purple: "#a855f7",
          "purple-dark": "#7c3aed",
          "purple-light": "#c084fc",
          bg: "#faf5ff",
          text: "#2d2d2d",
          muted: "#4a3f35",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
