module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        starduster: ["Starduster", "sans-serif"],
      },
      colors: {
        customBlue: '#83a4be',
        customPurple: '#7441b7',
        customYellow: '#fce372'
      },
    },
  },
  plugins: [],
}
