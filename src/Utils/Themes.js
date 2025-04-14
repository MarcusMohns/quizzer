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
      main: "#ffffff",
      faded: "#ffffff81",
    },
    secondary: {
      main: "#3D5499",
      default: "#677ec2",
      light: "#B7C1E1",
      dark: "#314075",
      veryDark: "#141622",
      highlight: "#152452",
      sidemenu: "#010202",
      cool: "#272d49",
    },
    lightSecondary: {
      main: "#7F91CD",
      default: "#7F91CD",
      light: "#93a1ce",
      dark: "#5b6b9e",
    },
    success: {
      main: "#54cf23",
      default: "#255636",
      light: "#73e664",
      dark: "#18c44fad",
      petrol: "#004A4F",
      cool: "#1c9642ad",
      lightCool: "#43975ead",
    },
    altSuccess: {
      main: "#27752b",
      light: "#3eb444",
      dark: "#135716",
    },
    error: {
      main: "#ED6464",
      light: "#c90303",
      dark: "#750000",
      default: "#4e100f",
      cool: "#8a2323",
    },
    info: {
      main: "#b9b9b9",
      light: "#666",
      default: "#525252",
      dark: "#313030",
      veryDark: "#192038",
    },
    orange: {
      main: "#FC9D22",
      default: "#FC9D22",
      light: "#f8a942",
      dark: "#FC9D22",
    },
    altOrange: {
      main: "#A46109",
      default: "#8A4700",
      light: "#cc7409",
      dark: "#9e5a07",
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
      main: "#000",
      faded: "#0000007f",
    },
    secondary: {
      main: "#4b5d91",
      default: "#4169e1",
      light: "#97b0fc",
      dark: "#2f4eda",
      veryDark: "#f2f4f8",
      highlight: "#d6dcfa",
      sidemenu: "#ffffff",
      cool: "#ffffff",
    },
    lightSecondary: {
      main: "#3D5499",
      default: "#677ec2",
      light: "#B7C1E1",
      dark: "#314075",
    },
    success: {
      main: "#398552",
      default: "#40d173",
      light: "#00862d",
      dark: "#3588c7",
      petrol: "#004A4F",
      cool: "#2bcc5eff",
      lightCool: "#29c45aff",
    },
    altSuccess: {
      main: "#68d36d",
      light: "#85f08b",
      dark: "#5fc564",
    },
    error: {
      main: "#9D3434",
      light: "#c90303",
      dark: "#750000",
      default: "#F5A6A3",
      cool: "#f17979",
    },
    info: {
      main: "#666",
      default: "#FAFAFA",
      light: "#cfcece",
      dark: "#00000028",
      veryDark: "#B7C1E1",
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
