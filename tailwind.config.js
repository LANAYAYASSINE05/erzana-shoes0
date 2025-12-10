/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

