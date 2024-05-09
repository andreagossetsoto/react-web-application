import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      gray: '#4D5562',
      purple: '#6169E9',
    },
    background: {
      default: '#f8f9fa',
      page: '#121826',
    },
    text: {
      primary: '#343a40',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: '#333',
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: '#333',
    },
    h3: {
      fontSize: '1.75rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: '#333',
    },
  },
  breakpoints: {
    values: {
      xs: 0, // phones
      sm: 600, // tablets
      md: 960, // small desktops
      lg: 1280, // large desktops
      xl: 1920, // extra-large desktops
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;