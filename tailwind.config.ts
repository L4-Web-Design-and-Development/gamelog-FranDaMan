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
};

export default config;
