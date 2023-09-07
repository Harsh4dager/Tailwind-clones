/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        main: '#404eed'
      },
      screens: {
        vvsm: '325px',
        vsm: '500px',
        bsm: '680px',
        vlg: '1048px',
        sxl: '1400px'
      },
    },
  },
  plugins: [],
}

