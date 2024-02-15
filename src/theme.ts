import { createTheme } from '@mui/material/styles';
import {
  NEUTRAL_50,
  PRIMARY_100,
  PRIMARY_500,
  PRIMARY_900,
  SECONDARY_100,
  SECONDARY_500,
  SECONDARY_900,
  TERTIARY_50,
  TERTIARY_500,
  TERTIARY_900,
} from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: PRIMARY_100,
      main: PRIMARY_500,
      dark: PRIMARY_900,
      contrastText: NEUTRAL_50,
    },
    secondary: {
      light: SECONDARY_100,
      main: SECONDARY_500,
      dark: SECONDARY_900,
      contrastText: NEUTRAL_50,
    },
    tertiary: {
      light: TERTIARY_50,
      main: TERTIARY_500,
      dark: TERTIARY_900,
      contrastText: NEUTRAL_50,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
