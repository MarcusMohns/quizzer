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
  const [completed, setCompleted] = useState({});
  const [results, setResults] = useState({});
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  const allStepsCompleted = Object.keys(completed).length === quizData.length;

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setResults({});
    setQuizState({ started: false, finished: false });
  };

  const resetQuizData = () => {
    setQuizData([]);
  };

  useEffect(() => {
    handleReset();
  }, [quizData]);

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
            activeStep={activeStep}
            timeLimit={timeLimit}
            results={results}
            setCompleted={setCompleted}
            quizState={quizState}
            setQuizState={setQuizState}
            allStepsCompleted={allStepsCompleted}
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
            completed={completed}
            setCompleted={setCompleted}
            steps={quizData}
            setResults={setResults}
            results={results}
            handleReset={handleReset}
          />
          <QuizStepper
            steps={quizData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            completed={completed}
            quizState={quizState.finished}
          />
        </>
      )}
    </Box>
  );
};

export default memo(Quizzer);
