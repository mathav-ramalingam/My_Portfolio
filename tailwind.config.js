/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        handshake: "shake 1s ease-in-out 0.1s 3",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-30deg)" },
          "40%" : { transform: "rotate(30deg)" },
          "60%": { transform: "rotate(-20deg)" },
          "80%": { transform: "rotate(20deg)" },
        },
      },

      scale: {
        '175': '1.75', 
        '300': '3.00'
      },


      
    },
  },
  plugins: [],
};
