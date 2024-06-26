/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mac: '1440px',
        pro: '912px',
        iphone: '380px',
        // air: '820px',
      },
    },
  },
  plugins: [],
};
