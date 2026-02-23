/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yc: {
          black: "#000000",
          dark: "#10091d",
          dark2: "#28193d",
          yellow: "#ffd600",
          yellow2: "#ffee0a",
          neon: "#f7ff00",
          white: "#ffffff",
          g1: "#c4c4c4",
          g2: "#b2b2b2",
          g3: "#a0a0a0",
          g4: "#8e8e8e",
          g5: "#7c7c7c",
          g6: "#6b6b6b",
          g7: "#595959",
          g8: "#474747",
          g9: "#353535",
          g10: "#232323",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,214,0,.25), 0 12px 35px rgba(0,0,0,.6)",
      },
    },
  },
  plugins: [],
};