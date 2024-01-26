/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f60",
        secondary: "#0B1B35",
        tertiary:"#1E0E62"
      },
      screens: {
        sm: "490px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        xxl:"1400px"
      },
      spacing: {
        '22rem': '22rem',
        '21rem': '21rem',
      }
    },
  },
  plugins: [],
};
