import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Themes.js";
import Navbar from "./Navbar/Navbar.jsx";
import Quizzer from "./Quizzer/Quizzer.tsx";
import "./App.css";
import { useCallback, useMemo } from "react";
import FrontPage from "./Frontpage/FrontPage.js";
import { QuizState } from "./store.js";
import Footer from "./Footer.tsx";
// Fetch darkMode settings from localStorage if they exist

// const darkModeData =
//   localStorage.getItem("Darkmode") !== null
//     ? JSON.parse(localStorage.getItem("Darkmode"))
//     : true;

function App() {
  const darkModeData = useMemo(
    () => localStorage.getItem("Darkmode") === "true",
    []
  );
  const [darkMode, setDarkMode] = useState<boolean>(darkModeData);
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizState | null>(null);

  const handleSetDarkMode = useCallback(() => {
    localStorage.setItem("Darkmode", JSON.stringify(!darkMode));
    setDarkMode((oldDarkMode) => !oldDarkMode);
  }, [darkMode]);

  const handleSideMenuOpen = useCallback(
    (open: boolean, event?: React.SyntheticEvent<object, Event>) => {
      if (
        // TODO figure out why they want to do this exactly
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSideMenuOpen(open);
    },
    []
  );

  const handleSetQuizData = useCallback((data: QuizState | null) => {
    setQuizData(data);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar
        handleSetDarkMode={handleSetDarkMode}
        handleSideMenuOpen={handleSideMenuOpen}
        handleSetQuizData={handleSetQuizData}
        darkMode={darkMode}
        sideMenuOpen={sideMenuOpen}
      />
      {/* If there is no quizData display Frontpage */}
      {!quizData ? (
        <FrontPage
          handleSetQuizData={handleSetQuizData}
          handleSideMenuOpen={handleSideMenuOpen}
        />
      ) : (
        <Quizzer quizData={quizData} handleSetQuizData={handleSetQuizData} />
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
