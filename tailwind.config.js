/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./scripts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkerBlue: "#03163B",
        Blue: "#012677",
        silverWhite: "#E5E5E5",
        silverGray: "#6E717A",
        orange: "#DB982D",
        orangeGradientLight: "#FCB31E",
        orangeGradientDark: "#F9901C",
        cardBg: "rgba(0, 0, 0, 0.7)",
        blueCardBg: "rgba(3, 22, 59, 0.7)",
        border: "#648F9F",
        lightGreen: "#09a700",
        deepGreen: "#0ab900",
      },
      keyframes: {
        blink: {
          "0%, 50%, 100%": { backgroundColor: "#09a700" },
          "25%, 75%": { backgroundColor: "#0ab900" },
        },
      },

      animation: {
        blink: "blink 500ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
