/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
          "100": "#2e2b29",
          "200": "#2c2a28",
          "300": "#222",
          "400": "#212121",
          "500": "#1c1d1d",
          "600": "#141414",
          "700": "#111",
          "800": "#090909",
        },
        coral: "#e1784b",
        sienna: "#ce724b",
        black: "#000",
        darkslategray: {
          "100": "#353434",
          "200": "#2d2d2d",
        },
        tan: "#cfa989",
        sandybrown: {
          "100": "#eca876",
          "200": "#eba168",
        },
        rosybrown: "#c6927c",
      },
      fontFamily: {
        h1: "'Kelson Sans'",
        archivo: "Archivo",
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
      "lg-8": "18.8px",
      "mini-1": "14.1px",
      "2xl": "21px",
      "42xl": "61px",
      "29xl": "48px",
      "6xl": "25px",
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
