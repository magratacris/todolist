/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "360px", //mobile-xs
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px", //tablet-landscape/laptop/720p
      "2xl": "1920px", //desktop/1080p
      "3xl": "2560px",
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
