/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myColors: {
          basic: '#343434', // 기본 검정 글씨
          primary: '#479CFF', // 포인트 파랑
          secondary: 'B6D7FF',
          gray: '#D9D9D9', // 회색
          shadow: '#ececec', // 그림자
          background: '#F9FCFF', // 배경(연파랑)
          typeA: '#9352E5',
          typeB: '#E55264',
          typeC: '#E5AA52',
          typeD: '#D1E552',
          typeE: '#52E59E',
        },
      },

      fontSize: {
        small: '1rem',
        medium: '1.5rem',
        large: '2rem',
      },

      maxWidth: {
        sideMenu: '17rem',
      },

      padding: {
        cardTitle: '0.5rem 1.3rem 0.5rem 1.3rem',
        cardContent: '1rem 1.3rem 1rem 1.3rem',
      },

      borderRadius: {
        basic: '10px',
      },

      margin: {
        card: '1rem 1.5rem 1rem 1.5rem',
      },
    },
  },
  plugins: [],
};
