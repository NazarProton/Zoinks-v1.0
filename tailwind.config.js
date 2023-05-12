/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '.1em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    extend: {
      colors: {
        zoinks: '#86D5D3',
        zoinksLight: '#D7F1F0',
        zoinksText: '#685A85',
        zoinksSolid: '#5EC7C4',
        zoinksTextViolet: '#35235D',
        BTCSNACK: '#F7931A',
        ETHSNACK: '#454A75',
        violetLight: '#685A85',
        violetLightest: '#9A91AE',
      },
      screens: {
        phoneMax: { max: '320px' },
        phoneMin: '320px',
        phone334Max: { max: '334px' },
        phone334Min: '334px',
        pc360Max: { max: "360px" },
        pc360: '360px',
        pc400: '400px',
        pc425Max: { max: '425px' },
        pc425: '425px',
        pc427: '427px',
        pc427Max: { max: '427px' },
        pc444: '444px',
        pc444Max: { max: '444px' },
        bigPhoneMax: { max: '468px' },
        bigPhoneMin: '468px',
        pc480Max: { max: '480px' },
        pc480Min: '480px',
        lunchBoxMax: { max: '530px' },
        lunchBox: '530px',
        footerMax: { max: '553px' },
        footerWindow: '553px',
        pc600Max: { max: '600px' },
        pc600: '600px',
        pc601Max: { max: '601px' },
        pc601: '601px',
        pc622Max: { max: '622px' },
        pc622: "622px",
        pc623Max: { max: '623px' },
        pc624Max: { max: '624px' },
        pc623: '623px',
        pc624: '624px',
        pc640: '640px',
        pc660: "660px",
        tabletMax: { max: '640px' },
        pc660Max: { max: '660px' },
        tablet: '640px',
        pc706Max: { max: '706px' },
        pc706: '706px',
        pc712Max: { max: '712px' },
        pc712: '712px',
        pc767Max: { max: '767px' },
        pc767: '767px',
        pc764Max: { max: '764px' },
        pc764: '764px',
        pc760: '760px',
        bigTabletMax: { max: '768px' },
        bigTablet: '768px',
        stats775Max: { max: '775px' },
        stats775: '775px',
        pc800: { max: '800px' },
        pc800Min: '800px',
        ChartMax: { max: '820px' },
        ChartMin: '820px',
        Chart821: '821px',
        pc870: '870px',
        pc786: '786px',
        pc870Max: { max: '870px' },
        pc1024: '871px',
        pc1050: '1050px',
        pc871Max: { max: '871px' },
        pc900Max: { max: '900px' },
        pc900: '900px',
        laptpSmallWindowMax: { max: '923px' },
        LaptopSmallWindow: '923px',
        laptpSmallWindowMaxPosts: { max: '928px' },
        LaptopSmallWindowPosts: '928px',
        pc950Max: { max: '950px' },
        pc950: '950px',
        pcMax: { max: '1200px' },
        pc: '1200px',
        // => @media (min-width: 992px) { ... }
      },
    },
    fontFamily: {
      hind: ['Hind'],
    },
  },
  plugins: [],
};