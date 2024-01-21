/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans:['nunito-sans']
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

