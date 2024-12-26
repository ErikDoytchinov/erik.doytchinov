const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'erik.doytchinov': {
          100: '#2F3E46',
          200: '#354F52',
          300: '#52796F',
          400: '#84A98C',
          500: '#CAD2C5',
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
          /* Utility for hiding scrollbars (WebKit browsers) */
          ".no-scrollbar": {
              "-ms-overflow-style": "none", // IE and Edge
              "scrollbar-width": "none", // Firefox
          },
          ".no-scrollbar::-webkit-scrollbar": {
              display: "none", // WebKit browsers
          },
          /* Utility to disable overscroll behavior */
          ".no-overscroll": {
              "overscroll-behavior": "none",
          },
      };

      addUtilities(newUtilities);
  }),
  ],
}

