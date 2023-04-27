module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B5A778',
        black: '#0D0D0D',
        gray: '#8A8A8A',
        danger: '#F44336',
        info: '#1877F2',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
      fontSize: {
        lead: ['22px', '30px'],
        xss: '10px',
      },
      screens: {
        xs: '360px',
        xlmid: '1400px',
        '3xl': '1664px',
      },
    },
    fontFamily: {
      heading: ['Montserrat', 'serif'],
      body: ['Raleway', 'serif'],
    },
  },
}

