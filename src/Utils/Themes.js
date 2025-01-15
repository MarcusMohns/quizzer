import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 16,
  },

  palette: {
    mode: "dark",
    background: {
      default: "#232739",
    },
    primary: {
      main: "#ffffff",
      faded: "#ffffff81",
    },
    secondary: {
      main: "#677ec2",
      default: "#677ec2",
      light: "#8995bb",
      dark: "#2746a1",
      highlight: "#152452",
      sidemenu: "#181e33",
    },
    success: {
      main: "#09cf13",
      light: "#73e664",
      dark: "#003950",
      petrol: "#004A4F",
      default: "#398552",
    },
    error: {
      main: "#e0605e",
      light: "#c90303",
      dark: "#750000",
      default: "#4e100f",
    },
    info: {
      main: "#2b2b2b",
      light: "#666",
      dark: "#00000028",
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 16,
  },
  palette: {
    mode: "light",
    background: {
      default: "#eefafc",
    },
    primary: {
      main: "#000",
      faded: "#0000007f",
    },
    secondary: {
      main: "#1741bd",
      default: "#4169e1",
      light: "#97b0fc",
      dark: "#2f4eda",
      highlight: "#d6dcfa",
      sidemenu: "#ffffff",
    },

    success: {
      main: "#398552",
      light: "#00862d",
      // light: "#7ca5c5",
      dark: "#3588c7",
      petrol: "#004A4F",
      default: "#55c279",
    },
    error: {
      main: "#c44c4a",
      light: "#c90303",
      dark: "#750000",
      default: "#f36866",
    },
    info: {
      main: "#666",
      light: "#cfcece",
      dark: "#00000028",
    },
  },
});
