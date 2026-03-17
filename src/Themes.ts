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
      paper: "#141b33",
    },
    primary: {
      main: "#3D5499",
      light: "#B7C1E1",
      dark: "#314075",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2e395c",
      light: "#4e609e",
      dark: "#2a3250",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
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
      paper: "#ffffff",
    },
    primary: {
      main: "#f3e9d9",
      light: "#ffffff",
      dark: "#bd9e71",
      contrastText: "#000000",
    },
    secondary: {
      main: "#f1e5d2",
      light: "#cfaf7f",
      dark: "#c0b5a3",
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
      main: "#e6c56a",
      light: "#af964a",
      dark: "#e2b63e",
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
