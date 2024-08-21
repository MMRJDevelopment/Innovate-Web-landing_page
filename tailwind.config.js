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
    extend: {
      colors: {
        "primary ": "#192239",
        "secondary  ": "#FF7628",
      },
    },
  },
  plugins: [],
};
