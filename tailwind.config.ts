import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {},
      animation: {
        marquee: "marquee 8s linear infinite",
      },
    },
  },
  plugins: [],

  animation: {
    marquee: "marquee 20s linear infinite", // was 8s → now 15s
  },
};

export default config;
