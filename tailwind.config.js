/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        'ph-input': "#AAAAAA"
      },
      colors: {
        primary: "#131313",
        font: "#e2e2e2",
        "nav-menu": "#9B9B9B",
        "bg-input": "#242424",
        'ph-input': "#AAAAAA",
      },
      padding: {
        px90: "90px",
      },
      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl':'6rem',
        }
      }
    },
  },
  plugins: [],
};
