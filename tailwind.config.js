/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        buttongradient1: "#083F9B",
        buttongradient2: "#7F56D9",
        herogradient1: "#04016C",
        herogradient2: "#4A16BD",
        featuresbg1: "#D9ECFF",
        featuresbg2: "#F0F3FF",
        coursesbg1: "#739FE8",
        coursesbg2: "#4F18CA",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        Rowdies: ["Rowdies", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
