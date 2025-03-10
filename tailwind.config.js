/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        420: "420px",
        1200: "1200px",
      },
      fontSize: {
        fz15: "15px",
        fz13: "13px",
      },
    },
  },
  plugins: [],
};
