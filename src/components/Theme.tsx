import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.0rem',
  },
};

export default theme;