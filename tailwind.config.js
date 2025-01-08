/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-30deg)" },
          "40%" : { transform: "rotate(30deg)" },
          "60%": { transform: "rotate(-20deg)" },
          "80%": { transform: "rotate(20deg)" },
        },

        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideout: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideup: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },

        slidedown: {
          '0%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },

      },

      scale: {
        '175': '1.75', 
        '300': '3.00'
      },

      boxShadow: {
        custom: '0 0 15px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.5) inset',
      },
      

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slideIn': 'slideIn 3s ease-out',
        'slideout': 'slideout 3s ease-out',
        'slideup': 'slideup 4s ease-out',
        'slidedown': 'slidedown 0.5s ease-out',
        'handshake': "shake 1s ease-in-out 0.1s 3",
        'zoomIn': 'zoomIn 2s ease-out',
      }

      
    },
  },
  plugins: [],
};
