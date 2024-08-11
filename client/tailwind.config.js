/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.vue',
  ],
  theme: {
    extend: {
        colors: {
            'primary': 'rgb(79 70 229)',
            'dark-primary': 'rgb(49 46 129)',
            'darkest-primary': 'rgb(30 27 75)',

            'danger': '#C94040',
            'pink': '#F3DADA',

            'success': '#17c653',
            'light-success': '#eafff1',

            'light': '#F5FCFF',
            'gray': '#bdbdbd',
            'dark': '#000',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            _2xl: '1536px',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

