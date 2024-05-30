/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F3054",
        secondary: {
          200: "#ace0f9",
          500: "#3B8DCB",
        },
        danger: "#FF0000",
        error: "#FF0000",
        info: "#FF0000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      gradientColorStops: {
        "light-blue": "#ace0f9",
        "light-gray": "#fff1eb",
      },
    },
  },
  plugins: [],
};
