import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Quizzer from "./Quizzer";
import Navbar from "./Navbar";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Utils/Themes";

// Fetch darkMode settings from localStorage if they exist
const darkModeData =
  localStorage.getItem("Darkmode") !== null
    ? JSON.parse(localStorage.getItem("Darkmode"))
    : true;

function App() {
  const [darkMode, setDarkMode] = useState(darkModeData);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container sx={{ width: "100vw" }}>
        <Quizzer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
