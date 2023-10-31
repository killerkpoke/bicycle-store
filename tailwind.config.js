/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    colors:{
      'dark-green': '#285430',
      'green': '#5F8D4E',
      'light-green': '#A4BE7B',
      'beige':'#E5D9B6'
    }},
  },
  plugins: [require("daisyui")],
}
