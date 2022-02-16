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
        customYellow: '#fce372',
        customRed: '#b72d44',
      },
      keyframes: {
        titleMove: {
          '20%': { transform: 'translateY(-100px)' },
          '40%': { transform: 'translateY(-200px)' },
          '60%': { transform: 'translateY(-300px)'},
          '80%': { transform: 'translateY(-380px)'},
          '100%': { transform: 'translateY(-460px)'}
        },
        warningMove: {
          '10%': { transform: 'translateY(-50px)'},
          '20%': { transform: 'translateY(-100px)'},
          '30%': { transform: 'translateY(-150px)'},
          '40%': { transform: 'translateY(-200px)'},
          '50%': { transform: 'translateY(-250px)'},
          '60%': { transform: 'translateY(-300px)'},
          '70%': { transform: 'translateY(-350px)'},
          '80%': { transform: 'translateY(-400px)'},
          '90%': { transform: 'translateY(-450px)'},
          '100%': { transform: 'translateY(-500px)'},
        },
        warningMove2: {
          '10%': { transform: 'translateY(-40px)'},
          '20%': { transform: 'translateY(-80px)'},
          '30%': { transform: 'translateY(-120px)'},
          '40%': { transform: 'translateY(-160px)'},
          '50%': { transform: 'translateY(-200px)'},
          '60%': { transform: 'translateY(-240px)'},
          '70%': { transform: 'translateY(-280px)'},
          '80%': { transform: 'translateY(-320px)'},
          '90%': { transform: 'translateY(-360px)'},
          '100%': { transform: 'translateY(-400px)'},
        },
      },
      animation: {
        titleMove: 'titleMove 10s ease-in infinite alternate',
        warningMove: 'warningMove 10s ease-in infinite alternate',
        warningMove2: 'warningMove 10s ease-in infinite alternate',
      },
    },
  },
  plugins: [],
}
