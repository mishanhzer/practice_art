/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        196: "40rem",
        350: "350px",
        420: "420px",
        510: "510px",
        566: "566px",
        600: "600px",
        1200: "1200px",
        1400: "1400px",
        gapFirst: "-233px",
        gapSecond: "-33px",
        gapThird: "-66px",
        gapFourth: "-100px",
        gapFifth: "-266px",
        gapSixth: "-300px",
        gapSeventh: "-466px",
      },
      fontSize: {
        fz15: "15px",
        fz13: "13px",
      },
    },
  },
  plugins: [],
};
