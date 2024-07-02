/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#0B0C11",
        "GRAY-400": "#95979D",
        "GRAY-800": "#101115",
        "GRAY-BORDER": "#2F3133",
        "GRAY-BORDER-75": "#2F3133BF",
        "BLUE-PRIMARY": "#4054ED",
        WHITE: "#FFFFFF",
        "RED-ALERT": "#ED4678",
        "GREEN-PROMO": "#179467",
      },
      fontFamily: {
        BODY: ["Switzer", "sans-serif"],
        HEAD: ["articulat-cf", "sans-serif"],
        BTN: ["DM Sans", "sans-serif"],
        SPECIAL: ["Playfair Display", "sans-serif"],
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      backgroundImage: {
        "navy-seals": "url('/assets/navy-seals-bg.png')",
        "rafael-avelar": "url('/assets/mentor.jpg')",
      },
    },
  },
  plugins: [],
};