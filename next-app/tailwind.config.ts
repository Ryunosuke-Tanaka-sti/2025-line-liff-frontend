import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        noto: ["Noto Sans JP", "sans-serif"],
      },
      animation: {
        "text-focus-in": "text-focus-in 2s infinite   both",
      },
      keyframes: {
        "text-focus-in": {
          "0%, 100%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "50%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
