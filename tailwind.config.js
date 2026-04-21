/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**\/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ✅ EDIT: Add custom teal shades or other brand colors
      colors: {
        teal: {
          50:  "#e1f5ee",
          100: "#9fe1cb",
          200: "#5dcaa5",
          300: "#2dba8d",
          400: "#1d9e75",
          500: "#179368",
          600: "#0f7a56",
          700: "#0c6647",
          800: "#085041",
          900: "#04342c",
        },
      },
      // ✅ EDIT: Add custom fonts
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};