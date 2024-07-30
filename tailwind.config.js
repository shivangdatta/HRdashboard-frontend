/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-delay-150': 'spin 1s linear infinite 0.15s',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

