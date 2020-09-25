import { createMuiTheme } from '@material-ui/core/styles';

//overrides to keep Material UI components aligned with FWI branding
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
  },
  palette: {
    error: { 500: '#b74780' }, //$merlot
    primary: { 500: '#5679b1' }, //$alpine
  },
});

export default theme;
