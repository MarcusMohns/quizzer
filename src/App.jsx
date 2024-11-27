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
  const [quizData, setQuizData] = useState([
    {
      category: "history",
      id: "622a1c3c7cc59eab6f951ae9",
      correctAnswer: "1066",
      incorrectAnswers: ["1166", "1266", "1366"],
      question: {
        text: "In Which Year Did The Battle Of Hastings Take Place?",
      },
      tags: ["battles", "uk", "history"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
  ]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setQuizData={setQuizData}
      />
      <Container sx={{ width: "100vw", height: "90vh" }}>
        <Quizzer quizData={quizData} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
