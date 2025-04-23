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
      dark: "#141622",
    },
    success: {
      main: "#52b829",
      light: "#5aca2e",
      dark: "#3e8523",
    },
    // error: {
    //   main: "#aa2a2a",
    //   light: "#bb3737",
    //   dark: "#8d1818",
    // },
    info: {
      main: "#b8b8b8",
      light: "#dddddd",
      dark: "#8f8f8f",
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
      main: "#3958b6",
      light: "#4f73e0",
      dark: "#203e97",
      contrastText: "#fff",
    },
    secondary: {
      main: "#697cc0",
      light: "#758ad4",
      dark: "#5163a3",
    },
    success: {
      main: "#398552",
      light: "#00862d",
      dark: "#265a37",
    },
    // error: {
    //   main: "#9D3434",
    //   light: "#c90303",
    //   dark: "#9c0303",
    // },
    info: {
      main: "#3f3939",
      light: "#696060",
      dark: "#2c2727",
      contrastText: "#fff",
    },
  },
});
