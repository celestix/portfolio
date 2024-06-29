import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%",
          }
        },
        blink: {
          "100%": {
            borderColor: "white"
          },
          "50%": {
            borderColor: "transparent"
          }
        },
        borderRemove: {
          "100%": {
            border: "none",
          }
        },
        progress: {
          "0%": {
            width: "0%",
          },
        }
      },
      animation: {
        typing: "typing 2s steps(20) 3 alternate, blink .7s 10, borderRemove 0s 7s forwards",
        progress: "progress 1s steps(20) 1"
      }
    },
  },
  plugins: [],
};
export default config;
