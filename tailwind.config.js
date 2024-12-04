/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/accordion.js",
  ],
  theme: {
    extend: {
      height: {
        '30': '7.5rem', // 30 * 0.25rem (dove 1 unità = 4px di default)
      },
      animation: {
        'gradient-rotate': 'gradient-rotate 3s linear infinite',
      },
      keyframes: {
        'gradient-rotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"), // Require only if you want to use FlyonUI JS component
    addDynamicIconSelectors()

  ],
  flyonui: {
    themes: ["luxury"]
  }
}