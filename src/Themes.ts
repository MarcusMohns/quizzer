import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: "monospace, Segoe UI,Roboto,Raleway",
    fontSize: 14,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#111222",
      paper: "#181c35",
    },
    primary: {
      main: "#3D5499",
      light: "#B7C1E1",
      dark: "#314075",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2e395c",
      light: "#43558f",
      dark: "#2a3250",
      contrastText: "#ffffff",
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
      default: "#e9ebff",
      paper: "#f8f9fb",
    },
    primary: {
      main: "#cedaff",
      light: "#ffffff",
      dark: "#95a8e2",
      contrastText: "#000000",
    },
    secondary: {
      main: "#a2b7f0",
      light: "#f3f6ff",
      dark: "#849af1",
      contrastText: "#000000",
    },
    success: {
      main: "#2dbb11",
      light: "#94ec82",
      dark: "#37ad1f",
      contrastText: "#7dda66",
    },
    error: {
      main: "#9D3434",
      light: "#c90303",
      dark: "#db4242",
      contrastText: "#f08787",
    },
    info: {
      main: "#3f3939",
      light: "#696060",
      dark: "#2c2727",
      contrastText: "#dfdfdf",
    },
    warning: {
      main: "#c26610",
      light: "#b37133",
      dark: "#9c4d03",
    },
  },
});
