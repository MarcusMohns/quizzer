import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useCallback, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Themes.js";
import Navbar from "./Navbar/Navbar.jsx";
import Quizzer from "./Quizzer/Quizzer.tsx";
import FrontPage from "./Frontpage/FrontPage.js";
import Footer from "./Footer.tsx";
import { QuizState } from "./store.js";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const darkModeSystemPreference = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const darkModeLocalStorage = localStorage.getItem("Darkmode");

  const darkModeData = useMemo(() => {
    if (darkModeLocalStorage === "true") {
      // Check local storage for dark mode first
      return true;
    } else if (darkModeLocalStorage === "false") {
      return false;
      // Check for system preference
    } else if (darkModeSystemPreference) {
      return true;
    } else {
      // Default to use light mode
      return false;
    }
  }, [darkModeLocalStorage, darkModeSystemPreference]);

  const [darkMode, setDarkMode] = useState<boolean>(darkModeData);
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizState | null>(null);

  const handleSetDarkMode = useCallback(() => {
    localStorage.setItem("Darkmode", (!darkMode).toString());
    setDarkMode((oldDarkMode) => !oldDarkMode);
  }, [darkMode]);

  const handleSideMenuOpen = useCallback(
    (open: boolean, event?: React.SyntheticEvent<object, Event>) => {
      if (
        // Disable Tab and Shift to avoid accidentally navigating to the sidemenu
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
