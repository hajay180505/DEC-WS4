/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content : {
        'homeIcon' : 'url("assets/images/spotify_icon.svg")',
      }
    },
  },
  plugins: [],
}

