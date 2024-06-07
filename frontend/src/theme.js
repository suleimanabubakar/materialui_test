import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC', // Turquoise
      light: '#FFFFFF', // White
      dark: '#335C6E', // Steel Blue
      contrastText: '#FABD33', // Yellow
    },
    secondary: {
      main: '#4AA088', // Teal
      light: '#CFFAFA', // Turquoise Light
      dark: '#FAAD00', // Yellow Dark
      contrastText: '#F76434', // Orange Red
    },
    custom: {
      turquoiseLight: '#CFFAFA',
      turquoiseDark1: '#53C2C2',
      turquoiseDark2: '#2B8B88',
      orangeRed: '#F76434',
      orangePastel: '#FFE6DC',
    },
  },
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
});

export default theme;