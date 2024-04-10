import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#303d11',
      light: 'rgba(44,54,16,0.2)',
      contrastText: '#79b740'
    },
    secondary: {
      main: '#d5d581',
      dark: '#4f4f05',
    },
  },
});