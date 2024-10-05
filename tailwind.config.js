/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '480px',
      desktop: '768px', ...defaultTheme.screens
    },
    extend: {
      colors: {
        "color-1": "#ddf2fd",
        "color-2": "#f38d68",
        "color-3": "#FF5A5F",
        "color-4": "#164863",
        "color-5": "#511730",
      },
      fontFamily: {
        'sans': ['"poppins"', ...defaultTheme.fontFamily.sans],
        'custom': ['"palanquin-dark"', 'sans-serif']
      },
      boxShadow: {
        'custom': '4px 4px 4px 4px rgba(22, 72, 99, 1)',
      },
      animation: {
        rotateAnimation: 'rotateAnimation 20s linear infinite'
      },
      keyframes: {
        rotateAnimation: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(360deg)",
          },
        }
      }
    },
    plugins: [],
  },
};
