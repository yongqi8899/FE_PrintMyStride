/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import * as themes from "daisyui/src/theming/themes";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(to right, color(a98-rgb 0.24 0.3 0.98),rgb(34 30 191), rgb(4 15 117))",
        "gradient-lisa":
          "linear-gradient(to right,  rgb(46 76 238), rgb(118 58 245), rgb(166 4 242))",
        "gradient-lisa-transparent":
          "linear-gradient(130deg, rgba(77, 73, 191, .8), rgba(255, 255, 255, .2))",
        "gradient-tiffany-transparent":
          "linear-gradient(30deg, rgba(5, 219, 242, .8), rgba(255, 255, 255, .2))",
        "custom-gradient": "linear-gradient(30deg, #190061 0%, #0A1B30 100%)",
        "custom-gradient-90":
          "linear-gradient(90deg, #190061 0%, #0A1B30 100%)",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      redressed: ["Redressed", "cursive"],
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: "#334cff",
          secondary: "#EFB51F",
          neutral: "#1D232A",
          "base-content": "white",
        },
        light: {
          ...themes.light,
          primary: "#040F75",
          secondary: "#F49C80",
          neutral: "#E6F0ED",
          "base-content": "#016D48",
        },
      },
    ],
  },
};
