/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "gray": "#808080",
        "gray-light": "#cccccc",
        "gray-lightest": "#f2f2f2",
        "blue": "#3498db",
        "red": "#FF0000",
        "green": "#00FF00",
        "yellow": "#FFFF00",
        "purple": "#800080",
        "orange": "#FFA500",
        "pink": "#FFC0CB",
        "brown": "#964B00",
        "gray-dark": "#333333",
        "gold": "#ffd700",
        "footer": "#000066" 
      },
      screens: {
        // Adding custom breakpoints if needed
        'xs': {max: '639px'},
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}