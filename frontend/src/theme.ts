import { createTheme } from '@mui/material/styles';
import { red, indigo } from '@mui/material/colors';

// A light theme for this app
export const light = createTheme({
  palette: {
    primary: {
      main: indigo[500],//'#1FC7D4',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

// A dark theme for this app
export const dark = createTheme({
  palette: {
    mode: 'dark'
  },
});
