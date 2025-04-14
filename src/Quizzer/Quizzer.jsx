import {
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
  useMemo,
} from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./Components/QuizStepper.jsx";
import QuizControls from "./Components/QuizControls.jsx";
import Results from "./Components/Results.jsx";
import ResultsModal from "./Components/ResultsModal.jsx";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StartPageSkeleton from "./Components/StartPage/Components/StartPageSkeleton.jsx";
import QuizSkeleton from "./Quiz/Components/QuizSkeleton.jsx";
const StartPage = lazy(() => import("./Components/StartPage/StartPage.jsx"));
const Quiz = lazy(() => import("./Quiz/Quiz.jsx"));

const Quizzer = ({ quizData, setQuizData }) => {
  const [quizState, setQuizState] = useState({
    started: false,
    completed: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  // Create an object with keys as question numbers and values as "Not Answered"
  const initialResults = useMemo(
    () =>
      Object.fromEntries(quizData.map((_, index) => [index, "Not Answered"])),
    [quizData]
  );

  const [results, setResults] = useState(initialResults);

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setQuizState({ started: false, completed: false });
    setResults(initialResults);
  }, [initialResults, setActiveStep, setQuizState, setResults]);

  const resetQuizData = useCallback(() => {
    setQuizData([]);
  }, [setQuizData]);

  const completeQuiz = useCallback(() => {
    setQuizState({ ...quizState, completed: true });
  }, [quizState, setQuizState]);

  // Check if all questions are answered
  const allQuestionsAnswered = useMemo(
    () =>
      Object.values(results).filter((result) => result === "Not Answered")
        .length === 0
  );

  useEffect(() => {
    // Reset Quiz when quizData changes
    handleReset();
  }, [quizData]);

  const ControlsAndStepper = () => (
    <>
      <QuizControls
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completeQuiz={completeQuiz}
        steps={quizData}
        quizState={quizState}
        setResults={setResults}
        results={results}
        handleReset={handleReset}
        allQuestionsAnswered={allQuestionsAnswered}
      />
      <QuizStepper
        steps={quizData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        results={results}
        quizState={quizState}
      />
    </>
  );

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
        backgroundImage: "url(./svgs/animated-shapes.svg)",
      }}
    >
      <Button
        variant="outlined"
        // Emptying quizData renders the FrontPage, Quiz is only rendered if quizData has data
        onClick={resetQuizData}
        size="small"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
        color="lightSecondary"
        startIcon={<NavigateBeforeIcon />}
      >
        Back to Frontpage
      </Button>
      {quizState.completed && (
        <ResultsModal
          setActiveStep={setActiveStep}
          results={results}
          handleReset={handleReset}
          totalQuestions={quizData.length}
        />
      )}

      {quizState.started ? (
        activeStep === quizData.length ? (
          // If last step render results
          <>
            <Results
              results={results}
              quizData={quizData}
              totalQuestions={quizData.length}
              timeLimit={timeLimit}
            />
            <ControlsAndStepper />
          </>
        ) : (
          <Suspense fallback={<QuizSkeleton />}>
            <Quiz
              questionData={quizData[activeStep]}
              setResults={setResults}
              results={results}
              activeStep={activeStep}
              timeLimit={timeLimit}
              quizState={quizState}
              setQuizState={setQuizState}
              completeQuiz={completeQuiz}
              allQuestionsAnswered={allQuestionsAnswered}
            />
            <ControlsAndStepper />
          </Suspense>
        )
      ) : (
        <Suspense fallback={<StartPageSkeleton />}>
          <StartPage
            timeLimit={timeLimit}
            setTimeLimit={setTimeLimit}
            quizState={quizState}
            setQuizState={setQuizState}
            quizData={quizData}
            resetQuizData={resetQuizData}
          />
        </Suspense>
      )}
    </Box>
  );
};
export default Quizzer;
