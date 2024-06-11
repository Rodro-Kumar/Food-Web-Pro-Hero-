/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: "Var(--Montserrat)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {},
    colors: {
      primaryFontColor: "var(--primaryFontColor)",
      secondaryFontColor: "var(--secondaryFontColor)",
      white: "var(--white)",
      additionalColor: "var(--additionalColor)",
    },
  },
  plugins: [],
};
