/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3639',
        secondary: '#3F4E4F',
        tertiary: '#A27B5C',
        quaternary: '#DCD7C9'
      },
      // colors: {
      //   primary: '#2C3333',
      //   secondary: '#395B64',
      //   tertiary: '#A5C9CA',
      //   quaternary: '#E7F6F2'
      // },
      // colors: {
      //   primary: '#1A120B',
      //   secondary: '#3C2A21',
      //   tertiary: '#D5CEA3',
      //   quaternary: '#E5E5CB'
      // },
      // colors: {
      //   primary: '#171717',
      //   secondary: '#444444',
      //   tertiary: '#DA0037',
      //   quaternary: '#EDEDED'
      // },
      // colors: {
      //   primary: '#222831',
      //   secondary: '#393E46',
      //   tertiary: '#00ADB5',
      //   quaternary: '#EEEEEE'
      // },
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
