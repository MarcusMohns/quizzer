import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333333",
    },
    primary: {
      main: "#ffffff",
      faded: "#ffffff81",
    },
    secondary: {
      main: "#444444",
      light: "#6e6e6e",
      dark: "#2e2e2e",
      highlight: "#9c9c9ca0",
      faded1: "#ff4747",
    },
    success: {
      main: "#005577",
      light: "#0085b9",
      dark: "#003950",
    },
    error: {
      main: "#e0605e",
    },

    info: {
      main: "#2b2b2b",
      light: "#8b8b8b",
      dark: "#1b1b1b",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f5ff",
    },
    primary: {
      main: "#000",
      faded: "#0000007f",
    },
    secondary: {
      main: "#ffc670",
      light: "#ffdaa2",
      dark: "#ffae35",
      highlight: "#fd8700",
    },

    success: {
      main: "#5897c7",
      light: "#7fa8c7",
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
