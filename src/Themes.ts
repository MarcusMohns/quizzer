import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 14,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#161820",
    },
    primary: {
      main: "#3D5499",
      light: "#B7C1E1",
      dark: "#314075",
      contrastText: "#fff",
    },
    secondary: {
      main: "#272d49",
      light: "#314075",
      dark: "#1d2236",
    },
    success: {
      main: "#34920e",
      light: "#599c3e",
      dark: "#2a6313",
      contrastText: "#2a6313",
    },
    error: {
      main: "#aa2a2a",
      light: "#bb3737",
      dark: "#8d1818",
      contrastText: "#8d1818",
    },
    info: {
      main: "#b8b8b8",
      light: "#dddddd",
      dark: "#8f8f8f",
      contrastText: "#554c4c",
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 14,
  },
  palette: {
    mode: "light",
    background: {
      default: "#f7f8ff",
    },
    primary: {
      main: "#5c73b9",
      light: "#7490e4",
      dark: "#2e4792",
      contrastText: "#fff",
    },
    secondary: {
      main: "#adbae7",
      light: "#c4cff7",
      dark: "#8593c5",
    },
    success: {
      main: "#2dbb11",
      light: "#94ec82",
      dark: "#6ed15a",
      contrastText: "#7dda66",
    },
    error: {
      main: "#9D3434",
      light: "#c90303",
      dark: "#9c0303",
      contrastText: "#f08787",
    },
    info: {
      main: "#3f3939",
      light: "#696060",
      dark: "#2c2727",
      contrastText: "#dfdfdf",
    },
  },
});
