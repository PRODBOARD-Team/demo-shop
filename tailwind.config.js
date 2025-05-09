/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      primary: ['Josefin Sans', 'sans-serif'],
      secondary: ['July it','sans-serif'],
    },

    extend: {
      colors: {
        'primary': '#BB976D',
        'primary-midum': '#DBCBBD',
        'primary-light': '#FFF7F0',
        'secondary': '#E13939',
        'secondary-midum': '#EAD4D4',
        'secondary-light': '#FAF2F2',
        'tertiary': '#85A3B4',
        'tertiary-midum': '#C8DAE4',
        'tertiary-light': '#ECF2F5',
        'title': '#172430',
        'paragraph': '#3C474E',
        'snow': '#F6F6F6',
        'dark-card-bg': '#1E2A35',
        'white-light': '#DBDBDB',
        'bdr-clr': '#E8E9EA;',
        'bdr-clr-drk': '#3C474E',
        'dark-secondary': '#1E2A35',
        'danger': '#CF1F25',
        'success': '#F3FAF2',
        'invoice': '#F8F8F8',
      },
      dropShadow: {
        'primary-shadow': '0px 30px 50px -10px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        '1366': '1366px',
      },
      scrollBehavior: ['smooth'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}

