module.exports = {
  content: [
    "./Resources/assets/js/App.vue",
    "./Resources/assets/js/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
