/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowfade: 'slowfade 1s eas-in-out',
        slideleft: 'slideleft 1s ease-in',
        slideleftOut: 'slideleftOut 1s ease-in-out',
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)'
      },
      fontSize: {
        '00xl': ['18px', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }]
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideleft: {
          from: {opacity: 0, transform: 'translateX(-100%)'},
          to: {opacity: 1, transform: 'none'}
        },
        slideleftOut: {
          from: { opacity: 1, transform: 'none' },
          to: { opacity: 0, transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}