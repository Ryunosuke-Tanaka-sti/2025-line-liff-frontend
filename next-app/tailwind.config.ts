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

        main: "#2563EB", // ロイヤルブルー
        sub: "#60A5FA", // スカイブルー
        accent: "#8B5CF6", // パープル
        "accent-alt": "#EC4899", // ピンク

        "text-primary": "#1F2937", // ダークグレー
        "text-secondary": "#4B5563", // ミディアムグレー

        "bg-primary": "#F3F4F6", // ライトグレー
        "bg-secondary": "#EFF6FF", // 薄い青色
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      animation: {
        "text-focus-in": "text-focus-in 2s infinite   both",
        "fade-in": "fade-in 0.5s ease-in-out",
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
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
