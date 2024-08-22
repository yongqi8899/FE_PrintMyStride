/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import * as themes from "daisyui/src/theming/themes";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, #2E4CEE,#221EBF, #040F75)',
        'gradient-lisa': 'linear-gradient(to right,  #2E4CEE, #763AF5, #A604F2)',
        'gradient-lisa-transparent': 'linear-gradient(130deg, rgba(77, 73, 191, .8), rgba(255, 255, 255, .2))',
        'gradient-tiffany-transparent': 'linear-gradient(30deg, rgba(5, 219, 242, .8), rgba(255, 255, 255, .2))',
        'custom-gradient': 'linear-gradient(30deg, #190061 0%, #0A1B30 100%)',
        'custom-gradient-90': 'linear-gradient(90deg, #190061 0%, #0A1B30 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    function({ addComponents }) {
      addComponents({
        // '.grandient-lisa': {
        //   '@apply absolute w-[500px] h-[500px] bg-gradient-lisa-transparent rounded-full top-[20%] left-[-10%]': {},
        // },
        // '.grandient-tiffany': {
        //   '@apply absolute w-[500px] h-[500px] bg-gradient-tiffany-transparent rounded-full ': {},
        // },
        // '.grandient-lisa-dark': {
        //   '@apply absolute w-[200px] h-[200px] bg-custom-gradient rounded-full bottom-[5%] right-[5%]': {},
        // },
        // '.grandient-lisa-dark-90': {
        //   '@apply absolute  w-[200px] h-[200px] bg-custom-gradient-90 rounded-full': {},
        // },
        '.btn-gradient': {
          '@apply bg-gradient-blue hover:bg-gradient-lisa text-white rounded text-center py-1': {},
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: "#334cff",
          secondary: "#EFB51F",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
        light: {
          ...themes.light,
          primary: "#37cdbe",
          secondary: "#EFB51F",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
        fontFamily: {
       
        },
      },
    ],
  },
};
