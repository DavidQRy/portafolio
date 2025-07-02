/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#10B981",    // Verde esmeralda principal
        secondary: "#047857",  // Verde esmeralda oscuro
        background: "#D1FAE5", // Verde esmeralda claro (fondo)
        white: "#FBFBFB"
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
      },
    },
  },
  plugins: [],
}

