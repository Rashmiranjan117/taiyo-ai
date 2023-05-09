/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      cursor: {
        fancy: "url(hand.cur), pointer",
      },
      colors: {
        "regal-blue": "#243c5a",
        "custom-blue": "#3C486B",
        "custom-white": "#F0F0F0",
        "custom-yellow": "#F9D949",
        "custom-red": "F45050",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
