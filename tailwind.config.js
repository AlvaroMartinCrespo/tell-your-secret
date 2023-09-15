/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // you can either add all styles
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
    // OR you can add only the styles you need
    './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
