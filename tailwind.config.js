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
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #F9ED32 0%, #F8D939 6%, #F5A54D 19%, #F0536C 37%, #EE2A7B 45%, #9E2AA7 60%, #5B2ACD 74%, #2A2AE8 86%, #0B2AF9 95%, #002AFF 100%)",
      },
      colors: {
        "primary ": "#192239",
        "secondary  ": "#FF7628",
      },
    },
  },
  plugins: [],
};
