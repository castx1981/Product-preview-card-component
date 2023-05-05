/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Fraunces', 'serif'],
        'sans': ['Montserrat', 'sans-serif']
      },
      colors: {
        'cream': 'hsl(28, 38%, 92%)',
        'aurometalSaurus': 'hsl(228, 12%, 48%)',
        'deepAquamarine': 'hsl(157, 36%, 37%)',
        'deepAquamarineHover': 'hsl(157, 43%, 18%)',
        'gunmetal': 'hsl(212, 21%, 14%)',
      }
    }
  },
  plugins: [],
}
