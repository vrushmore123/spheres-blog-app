/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend:{
      screens: {
        'max-sm': { 'max': '639px' }, // Custom breakpoint for screens below 640px (sm)
      },
      colors:{
        diff : '{#050505}',
      },
    },
  },
  plugins: [],
}

