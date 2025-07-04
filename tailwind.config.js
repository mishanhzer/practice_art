/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        196: "40rem",
        350: "350px",
        420: "420px",
        510: "510px",
        1200: "1200px",
        1400: "1400px",
      },
      fontSize: {
        fz15: "15px",
        fz13: "13px",
      },
      fontFamily: {
        lora: ["Lora", "serif", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customColor: "rgba(156, 163, 175)",
        testColor: "rgb(107 114 128)",
        navigateLinkColor: "rgb(30 58 138)",
      },
      animation: {
        animateOpacityBefore: "animateOpacity 0.5s ease",
        animateOpacityAfter: "animateOpacity 0.5s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        animateOpacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       spacing: {
//         128: "32rem",
//         196: "40rem",
//         350: "350px",
//         420: "420px",
//         510: "510px",
//         566: "566px",
//         600: "600px",
//         1200: "1200px",
//         1400: "1400px",
//         gapFirst: "-233px",
//         gapSecond: "-33px",
//         gapThird: "-66px",
//         gapFourth: "-100px",
//         gapFifth: "-266px",
//         gapSixth: "-300px",
//         gapSeventh: "-466px",

//         gapFlowersFirst: "-221px",
//         gapFlowersSecond: "-82px",
//         gapFlowersThird: "-327px",
//         gapFlowersFourth: "-286px",
//         gapFlowersFifth: "-133px",
//         gapFlowersSixth: "-118px",

//         gapStillLifeFirst: "-299px",
//         gapStillLifeSecond: "-333px",

//         gapPeopleAndAnimalsFirst: "-99px",
//       },
//       fontSize: {
//         fz15: "15px",
//         fz13: "13px",
//       },
//       fontFamily: {
//         lora: ["Lora", "serif", "sans-serif"],
//         display: ["Oswald"],
//         body: ['"Open Sans"'],
//       },
//       colors: {
//         customColor: "rgba(156, 163, 175)",
//         testColor: "rgb(107 114 128)",
//         navigateLinkColor: "rgb(30 58 138)",
//       },
//     },
//   },
//   plugins: [],
// };
