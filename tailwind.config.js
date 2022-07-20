const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
    },
    colors: {
      ...colors
    },
    extend: {
      colors: {
        blue: {
          standard: "#0062FF"
        },
        grey: {
          standard: "#9A9AAF",
          generic: "#EFF0F6",
          light: "#E2E2EA",
          lighter: "#656575",
          lighten: "#F2F3F7",
          darker: "#8A8A98",
          darkest: "#2E2E3A"
        }
      },
    },
  },
  plugins: []
}
