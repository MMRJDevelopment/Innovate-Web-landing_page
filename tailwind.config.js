/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      pap: ["Paprika", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
      robo: ["Roboto", "sans-serif"],
      nun: ["Nunito", "sans-serif"],
    },
    screens: {
      sm: { max: "640px" },

      md: { min: "640px", max: "1023px" },

      lg: { min: "1024px", max: "1535px" },
      xl: { min: "1535px" },
    },
    extend: {
      colors: {
        "primary ": "#192239",
        "secondary  ": "#FF7628",
      },
    },
  },
  plugins: [],
};
