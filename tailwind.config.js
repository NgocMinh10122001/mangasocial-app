/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        17: "17.17px",
      },
      lineHeight: {
        18.75: "18.75px",
        21: "21px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
      },
      width: {
        240: "240px",
        125: "125px",
        175: "175px",
      },
      height: {
        54: "54px",
        46: "46px",
        42: "42px",
      },
      padding: {
        28.5: "28.43px",
        17: "17.17px",
      },
      fontSize: {
        32: "32px",
        29: "29px",
      },
      lineHeight: {
        37.5: "37.5px",
        34: "34px",
      },
      colors: {
        "orange-app": "#ED6119",
        "light-orange": "#FF9935",
        "rate-star": "#FF9935",
      },
    },
    fontFamily: {
      sans: [
        '"Roboto", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [],
};
