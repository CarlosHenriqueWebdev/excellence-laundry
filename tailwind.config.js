/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: ["Dancing Script", "cursive"],
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-75": "rgba(0, 0, 0, 0.75)",
        "black-85": "rgba(0, 0, 0, 0.85)",
        "white-25": "rgba(255, 255, 255, 0.25)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-75": "rgba(255, 255, 255, 0.75)",
        "white-85": "rgba(255, 255, 255, 0.85)",
        "white-90": "rgba(255, 255, 255, 0.90)",
        color01: "#86D1E6",
        "color01-15": "rgba(93, 183, 209, 0.15)",
        color02: "#1D738B",
        color03: "#F5F5F2",
        color04: "#5DB7D1",
        color05: "rgba(0, 0, 0, 0.015)",
        textBlack: "#333333",

        "deep-night": "#11141B",
        "midnight-blue": "#0C0F16",
        "eclipse-black": "#070A11",
        "graphite-gray": "#2A2D34",
        "twilight-gray": "#181B21",
        "golden-yellow": "#D0AF21",
        "golden-sunbeam": "#E3C74A",
        "sunset-yellow": "#A78A0F",
        "pale-white": "#F0F0F0",
        "light-gray": "#DDDDDD",
        "lavender-haze": "#E7E3E7",
        skeletonLoader: "#1c2b3a",
        placeholderBg: "#10171e",
        skeletonList: "#15202b",
        skeletonBorder: "#38444d",
      },
    },
  },
  plugins: [],
};
