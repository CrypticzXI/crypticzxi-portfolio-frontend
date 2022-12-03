module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  mode: "jit",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Background': '#131c29',
      'SecondryBackground': '#1b2737',
      'Text': "#ffffff",
      'FirstColour': "#198794",
      'SecondryColour': "#38acad",
      'required': "#ef4444"
    },
    extend: {
      fontFamily: {
        'rubik': ['"rubik"'],
        'poppins': ['poppins'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
