/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        'ph-input': "#AAAAAA"
      },
      fontFamily: {
        'Open-sans': ['"Open Sans"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif'],
        'Playfair': ['"Playfair Display"', 'serif'],
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
      },
      animation: {
        orbitPhotos: "orbitPhotos 10s linear infinite",
        rotatePhotos: "rotatePhotos 10s linear infinite",
      },
      keyframes: {
        orbitPhotos: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotatePhotos: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
