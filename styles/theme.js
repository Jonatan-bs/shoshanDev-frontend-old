const theme = () => ({
  colors: {
    primary: '#bf2742',
    primaryDark: '#7d0319',
    dark: '#343434',
    dark2: '#1a1919',
    dark3: '#797979',
    light: '#fff',
    light2: '#f3f3f3',
    light3: '#afadad',
    // light3: '#fae9ec',
  },
  mediaQueries: {
    md: 'only screen and (min-width: 769px)'
  },
  fontSizes: {
    pct: {
      base: "80",
      sm: "80",
      md: "100",
    },
    h: {
      xs: "1.6rem",
      sm: "1.8rem",
      md: "2.2rem",
      lg: "3rem",
      xl: "4rem",   
    },
    hmd: { 
      xl: "6rem"
    },
    p: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.4em",
      lg: "1.6rem",
      xl: "1.8rem",   
    }
  }
})

export default theme