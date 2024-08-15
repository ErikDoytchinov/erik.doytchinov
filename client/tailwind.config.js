/** @type {import('tailwindcss').Config} */
export default {
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
  ],
}

