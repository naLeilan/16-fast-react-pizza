/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
