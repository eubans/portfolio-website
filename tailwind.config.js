/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        tertiary: '#A27B5C',
        quaternary: '#EEEEEE'
      },
      cursor: {
        code: 'url(https://api.iconify.design/ic:baseline-code.svg), pointer'
      }
    },
    fontFamily: {
      header: ['Inter', 'Open Sans', 'sans-seri'],
      body: ['Inter', 'Open Sans', 'sans-seri'],
      footer: ['Inter', 'Open Sans', 'sans-seri'],
      comfortta: ['Comfortaa', 'Open Sans', 'sans-seri']
    }
  },
  plugins: []
}
