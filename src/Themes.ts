import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: '"Nunito", "Segoe UI", "Roboto", "Raleway", sans-serif',
    fontSize: 14,
    fontWeightRegular: 600,
    fontWeightBold: 800,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#111222",
      paper: "#050f2c",
    },
    primary: {
      main: "#4a65b4",
      light: "#637bbf",
      dark: "#263564",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2e395c",
      light: "#4e609e",
      dark: "#ffaa48a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#b8b8b8",
      light: "#dddddd",
      dark: "#8f8f8f",
      contrastText: "#000000",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Nunito", "Segoe UI", "Roboto", "Raleway", sans-serif',
    fontSize: 14,
    fontWeightRegular: 600,
    fontWeightBold: 800,
  },
  palette: {
    mode: "light",
    background: {
      default: "#fffbf5",
      paper: "#ffd9a3",
    },
    primary: {
      main: "#ffbd68",
      light: "#ffce8f",
      dark: "#ffb049",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffbd68",
      light: "#ffce8f",
      dark: "#a2bbf1",
      contrastText: "#000000",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#ffffff",
    },
    info: {
      main: "#3f3939",
      light: "#696060",
      dark: "#2c2727",
      contrastText: "#dfdfdf",
    },
    warning: {
      main: "#ec9735a9",
      light: "#ffb96aa9",
      dark: "#db8d34a9",
      contrastText: "#000000",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
