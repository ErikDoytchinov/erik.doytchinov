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
          100: '#0d1321',
          200: '#1d2d44',
          300: '#3e5c76',
          400: '#748cab',
          500: '#f0ebd8',
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

