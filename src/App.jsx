import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./Utils/Themes";
// import FrontPage from "./FrontPage";
import Navbar from "./Navbar/Navbar.jsx";
import FrontPage from "./Frontpage/FrontPage.jsx";
const Quizzer = lazy(() => import("./Quizzer/Quizzer.jsx"));

// Fetch darkMode settings from localStorage if they exist
const darkModeData =
  localStorage.getItem("Darkmode") !== null
    ? JSON.parse(localStorage.getItem("Darkmode"))
    : true;

function App() {
  const [darkMode, setDarkMode] = useState(darkModeData);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [quizData, setQuizData] = useState([]);

  // const [quizData, setQuizData] = useState([
  //   {
  //     category: "history",
  //     id: "65056f0c7a97013de78b53bc",
  //     correctAnswer: "Russia",
  //     incorrectAnswers: ["Japan", "France", "Canada"],
  //     question: {
  //       text: "Which country was suspended from the G8 in 2014?",
  //     },
  //     tags: ["history", "2010's", "organisations", "organizations"],
  //     type: "text_choice",
  //     difficulty: "medium",
  //     regions: [],
  //     isNiche: false,
  //   },
  //   {
  //     category: "history",
  //     id: "647edb8d520523194910c347",
  //     correctAnswer: "1929",
  //     incorrectAnswers: ["1987", "2001", "2008"],
  //     question: {
  //       text: "In what year did the Dow Jones Industrial Average crash and lose 23% of its value in what is known as 'Black Tuesday'?",
  //     },
  //     tags: ["economics", "events", "history"],
  //     type: "text_choice",
  //     difficulty: "medium",
  //     regions: [],
  //     isNiche: false,
  //   },
  //   {
  //     category: "history",
  //     id: "622a1c3c7cc59eab6f951afe",
  //     correctAnswer: "Salem",
  //     incorrectAnswers: ["Greensboro", "Alexandria", "Wilmington"],
  //     question: {
  //       text: "In which Massachusetts town were 20 people executed for witchcraft in 1692?",
  //     },
  //     tags: ["1600's", "usa", "halloween", "history"],
  //     type: "text_choice",
  //     difficulty: "medium",
  //     regions: [],
  //     isNiche: false,
  //   },
  //   {
  //     category: "history",
  //     id: "622a1c357cc59eab6f94fd41",
  //     correctAnswer: "Constantine",
  //     incorrectAnswers: ["Byzantine", "Marcus Aurelius", "Trajan"],
  //     question: {
  //       text: "Which Roman Emperor moved the capital from Rome to the city now known as Istanbul? ",
  //     },
  //     tags: ["romans", "classics", "history"],
  //     type: "text_choice",
  //     difficulty: "medium",
  //     regions: [],
  //     isNiche: false,
  //   },
  //   {
  //     category: "history",
  //     id: "622a1c367cc59eab6f950358",
  //     correctAnswer: "John Adams",
  //     incorrectAnswers: ["Thomas Jefferson", "Andrew Jackson", "James Monroe"],
  //     question: {
  //       text: "Who was George Washington's vice-president?",
  //     },
  //     tags: ["history"],
  //     type: "text_choice",
  //     difficulty: "medium",
  //     regions: [],
  //     isNiche: false,
  //   },
  // ]);

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
      {quizData.length <= 0 ? (
        <FrontPage
          setQuizData={setQuizData}
          setOpenSideMenu={setOpenSideMenu}
        />
      ) : (
        <Suspense fallback={<div>loading</div>}>
          <Quizzer quizData={quizData} setQuizData={setQuizData} />
        </Suspense>
      )}
    </ThemeProvider>
  );
}

export default App;
