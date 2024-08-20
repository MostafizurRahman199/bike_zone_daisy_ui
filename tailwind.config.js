/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'base-100': '#f5f5f5', // Example color value
      },
      textColor: {
        'base-content': '#333333', // Example color value
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [],
}

