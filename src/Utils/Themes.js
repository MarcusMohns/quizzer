import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
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
      dark: "#152452",
      highlight: "#4a5b8f",
      faded1: "#2e417a",
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
      light: "#8b8b8b",
      dark: "#1b1b1b",
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
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
      main: "#4169e1",
      light: "#97b0fc",
      dark: "#91a5ff",
      highlight: "#d6dcfa",
    },

    success: {
      main: "#5897c7",
      light: "#7ca5c5",
      dark: "#3588c7",
    },
    error: {
      main: "#c44c4a",
    },
    info: {
      main: "#faddb2",
      light: "#f8e5c9",
      dark: "#f7cc8b",
    },
  },
});
