/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'darkerBlue': '#03163B',
        'Blue': '#012677',
        'silverWhite': '#E5E5E5',
        'silverGray': '#6E717A',
        'orange': '#DB982D',
        'orangeGradientLight': '#FCB31E',
        'orangeGradientDark': '#F9901C',
        'cardBg': 'rgba(0, 0, 0, 0.7)',
        'blueCardBg': 'rgba(3, 22, 59, 0.7)',
        'border': '#648F9F'
      }
    },
  },
  plugins: [],
}
