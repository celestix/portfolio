/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{html,js}"
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
            width: "100%"
          }
        },
        blink: {
          "100%": {
            borderColor: "white"
          },
          "50%": {
            borderColor: "transparent"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) 3 alternate, blink .7s 3"
      }
    },
  },
  plugins: [],
}

