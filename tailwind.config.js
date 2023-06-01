/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: {
          "100": "#d95b24",
          "200": "#cf531d",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#eee",
        },
        gray: {
          "100": "#939393",
          "200": "#2e2b29",
          "300": "#2c2a28",
          "400": "#252525",
          "500": "#222",
          "600": "#212121",
          "700": "#1e1e1e",
          "800": "#1d1d1d",
          "900": "#1c1d1d",
          "1000": "#141414",
          "1100": "#111",
          "1200": "#090909",
          "1300": "rgba(255, 255, 255, 0)",
        },
        coral: "#e1784b",
        sienna: "#ce724b",
        black: "#000",
        darkslategray: {
          "100": "#494949",
          "200": "#3a3a3a",
          "300": "#353434",
          "400": "#323232",
          "500": "#2d2d2d",
        },
        tan: "#cfa989",
        sandybrown: {
          "100": "#eca876",
          "200": "#eba168",
        },
        rosybrown: "#c6927c",
        gainsboro: "#d9d9d9",
        dimgray: {
          "100": "#606060",
          "200": "#5b5b5b",
        },
      },
      fontFamily: {
        h1: "'Kelson Sans'",
        archivo: "Archivo",
        "intruding-cat": "'Intruding Cat'",
        arial: "Arial",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "9xl": "28px",
      xl: "20px",
      "sm-5": "13.5px",
      "41xl": "60px",
      lg: "18px",
      "27xl": "46px",
      "13xl": "32px",
      "19xl-4": "38.4px",
      sm: "14px",
      "lg-8": "18.8px",
      "mini-1": "14.1px",
      "2xl": "21px",
      "42xl": "61px",
      "6xl": "25px",
      "5xl": "24px",
      "35xl": "54px",
      "7xl": "26px",
      "17xl": "36px",
    },
    screens: {
      lg: {
        max: "1140px",
      },
      sm: {
        max: "768px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
