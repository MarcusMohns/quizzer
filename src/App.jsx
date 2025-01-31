import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Utils/Themes.js";
import Navbar from "./Navbar/Navbar.jsx";
import FrontPage from "./Frontpage/FrontPage.jsx";
import Quizzer from "./Quizzer/Quizzer.jsx";

// Fetch darkMode settings from localStorage if they exist
const darkModeData =
  localStorage.getItem("Darkmode") !== null
    ? JSON.parse(localStorage.getItem("Darkmode"))
    : true;

function App() {
  const [darkMode, setDarkMode] = useState(darkModeData);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [quizData, setQuizData] = useState([]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setQuizData={setQuizData}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
      />
      {/* If theres quiz loaded (no quizData) then show Frontpage */}
      {quizData.length <= 0 ? (
        <FrontPage
          setQuizData={setQuizData}
          setOpenSideMenu={setOpenSideMenu}
        />
      ) : (
        <Quizzer quizData={quizData} setQuizData={setQuizData} />
      )}
    </ThemeProvider>
  );
}

export default App;
