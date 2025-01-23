import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./Components/QuizStepper.jsx";
import QuizControls from "./Components/QuizControls.jsx";
import Quiz from "./Quiz/Quiz.jsx";
import Results from "./Components/Results.jsx";
import ResultsModal from "./Components/ResultsModal.jsx";
import StartPage from "./Components/StartPage/StartPage.jsx";
import Button from "@mui/material/Button";
import { memo } from "react";

const Quizzer = ({ quizData, setQuizData }) => {
  const [quizState, setQuizState] = useState({
    started: false,
    finished: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  // Create an object with keys as question numbers and values as "Not Answered"
  const initialResults = Object.fromEntries(
    quizData.map((_, index) => [index, "Not Answered"])
  );
  const [results, setResults] = useState(initialResults);

  const handleReset = () => {
    setActiveStep(0);
    setQuizState({ started: false, finished: false });
    setResults(initialResults);
  };

  const resetQuizData = () => {
    setQuizData([]);
  };

  useEffect(() => {
    handleReset();
  }, [quizData]);

  const handleCompleteQuiz = () => {
    //TODO Set all questions to answered (disabled)
    setActiveStep(quizData.length);
    setQuizState({ ...quizState, finished: true });
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        height: "100%",
        alignItems: "center",
        p: 0,
      }}
    >
      <Button onClick={handleCompleteQuiz}>ASd</Button>
      <Button
        variant="outlined"
        // Emptying quizData renders the FrontPage, Quiz is only rendered if quizData has data
        onClick={resetQuizData}
        size="small"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
        color="secondary"
      >
        Back to Frontpage
      </Button>
      {quizState.finished && (
        <ResultsModal
          setActiveStep={setActiveStep}
          results={results}
          handleReset={handleReset}
          totalQuestions={quizData.length}
        />
      )}

      {quizState.started ? (
        activeStep === quizData.length ? (
          <Results
            results={results}
            quizData={quizData}
            totalQuestions={quizData.length}
          />
        ) : (
          <Quiz
            questionData={quizData[activeStep]}
            setResults={setResults}
            results={results}
            activeStep={activeStep}
            timeLimit={timeLimit}
            quizState={quizState}
            setQuizState={setQuizState}
          />
        )
      ) : (
        <StartPage
          timeLimit={timeLimit}
          setTimeLimit={setTimeLimit}
          quizState={quizState}
          setQuizState={setQuizState}
          quizData={quizData}
          resetQuizData={resetQuizData}
        />
      )}
      {quizState.started && (
        <>
          <QuizControls
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            handleCompleteQuiz={handleCompleteQuiz}
            steps={quizData}
            setResults={setResults}
            results={results}
            handleReset={handleReset}
          />
          <QuizStepper
            steps={quizData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            results={results}
            quizState={quizState.finished}
          />
        </>
      )}
    </Box>
  );
};

export default memo(Quizzer);
