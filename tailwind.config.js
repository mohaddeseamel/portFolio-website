/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['nunito', ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      },
    },
  },
  corePlugins: {
    padding: false,
  },
  plugins: [],
}

