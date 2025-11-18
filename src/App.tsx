import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useCallback, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Themes.ts";
import Navbar from "./navbar/Navbar.tsx";
import Quizzer from "./quizzer/Quizzer.tsx";
import FrontPage from "./front-page/FrontPage.tsx";
import Footer from "./Footer.tsx";
import { QuizState } from "./store.tsx";
import useDarkmode from "./useDarkmode.ts";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkmode();
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizState | null>(null);

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar
        toggleDarkMode={toggleDarkMode}
        handleSideMenuOpen={handleSideMenuOpen}
        handleSetQuizData={handleSetQuizData}
        isDarkMode={isDarkMode}
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
