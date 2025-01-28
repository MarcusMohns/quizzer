import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 14,
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
      light: "#B7C1E1",
      dark: "#40549C",
      highlight: "#152452",
      sidemenu: "#181e33",
      cool: "#272d49",
    },
    success: {
      main: "#09cf13",
      light: "#73e664",
      dark: "#18c44fad",
      petrol: "#004A4F",
      default: "#398552",
      cool: "#1c9642ad",
      lightCool: "#43975ead",
    },
    altSuccess: {
      main: "#27752b",
      light: "#3eb444",
      dark: "#135716",
    },
    error: {
      main: "#e0605e",
      light: "#c90303",
      dark: "#750000",
      default: "#4e100f",
      cool: "#8a2323",
    },
    info: {
      main: "#2b2b2b",
      light: "#666",
      dark: "#00000028",
    },
    orange: {
      main: "#FC9D22",
      default: "#FC9D22",
      light: "#ffb14b",
      dark: "#cf7909",
    },
    altOrange: {
      main: "#8A4700",
      default: "#8A4700",
      light: "#cc7409",
      dark: "#5e3503",
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
      cool: "#dbe6fd",
    },

    success: {
      main: "#398552",
      light: "#00862d",
      dark: "#3588c7",
      petrol: "#004A4F",
      default: "#55c279",
      cool: "#1c9642ad",
      lightCool: "#43975ead",
    },
    altSuccess: {
      main: "#68d36d",
      light: "#85f08b",
      dark: "#5fc564",
    },
    error: {
      main: "#c44c4a",
      light: "#c90303",
      dark: "#750000",
      default: "#f36866",
      cool: "#f17979",
    },
    info: {
      main: "#666",
      light: "#cfcece",
      dark: "#00000028",
    },
    orange: {
      main: "#000000",
      default: "#af6300",
      light: "#ffb14b",
      dark: "#c27612",
    },
    altOrange: {
      main: "#ffa230",
      default: "#ffa230",
      light: "#ffb04f",
      dark: "#e4993e",
    },
  },
});
