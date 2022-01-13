module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'spotify-green-primary': '#1DB954',
        'spotify-green-secondary': '#1DB954',
        'spotify-black': '#191414',
      },
      gridTemplateColumns: {
        'footerLeft': 'auto auto minmax(0, 1fr)',
      },
    }
  },
  extend: {},
  plugins: [],
}
