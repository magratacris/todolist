/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "main-color": "rgba(255, 255, 255, 0.5)",
        "sec-color": "#151515",
        "accent-color": "#dbdbdb",
      },
    },
    fontFamily: {
      openSans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
