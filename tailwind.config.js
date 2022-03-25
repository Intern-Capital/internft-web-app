// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: "#06021a",
        darkviolet: "#14032c",
      },
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        flicker: "flicker 5000ms ease-in-out infinite",
        flickerMinor: "flickerMinor 7000ms ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        flyPlus: "flyPlus 9s linear infinite",
      },
      keyframes: {
        fly: {
          "100%": {
            transform: "rotate(1turn) translate(100px) rotate(-1turn)",
          },
        },
        flyPlus: {
          "100%": {
            transform: "rotate(-1turn) translate(100px) rotate(1turn)",
          },
        },
        flicker: {
          // "0%, 100%": { opacity: 1 },
          "0%, 19%": { opacity: 0.03 },
          "21%, 22%": { opacity: 0.8 },
          "23%, 24%": { opacity: 0.03 },
          "25%, 26%": { opacity: 0.8 },
          "27%, 100%": { opacity: 0.03 },
        },
        flickerMinor: {
          "0%, 19%": { opacity: 1 },
          "20%": { opacity: 0.1 },
          "21%, 23%": { opacity: 1 },
          "24%": { opacity: 0.2 },
          "25%, 100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  // ...
}
