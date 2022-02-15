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
        customLightBlue: '#9eccd1',
        customPurple: '#7441b7',
        customLightPurple: '#9957ef',
        customYellow: '#fce372'
      },
    },
  },
  plugins: [],
}
