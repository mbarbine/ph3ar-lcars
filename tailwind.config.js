module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        lcarsPrimary: '#ff9933',
        lcarsSecondary: '#993399',
        lcarsTertiary: '#cc3366',
        lcarsAccent: '#ffcc00',
        lcarsHighlight: '#3366ff',
        darkBg: '#1a1a1a',
        lightBg: '#ffffff',
      },
      fontFamily: {
        lcars: ['LCARS', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
