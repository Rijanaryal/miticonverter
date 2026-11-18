/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#DC143C", // Nepal flag red
        nepalblue: "#003893", // Nepal flag blue
        gold: "#F4B400", // prayer-flag yellow
        cream: "#FFF8EE", // paper background
        ink: "#2B1B17",
      },
      fontFamily: {
        deva: ["var(--font-deva)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        pop: "pop 0.7s cubic-bezier(.34,1.56,.64,1) both",
      },
    },
  },
  plugins: [],
};
