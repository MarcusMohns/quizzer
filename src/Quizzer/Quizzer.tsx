import {
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
  useMemo,
} from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./Components/QuizStepper.tsx";
import QuizControls from "./Components/QuizControls.tsx";
import Results from "./Components/Results.tsx";
import ResultsModal from "./Components/ResultsModal.tsx";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StartPageSkeleton from "./Components/StartPage/Components/StartPageSkeleton.tsx";
import QuizSkeleton from "./Quiz/Components/QuizSkeleton.tsx";
const StartPage = lazy(() => import("./Components/StartPage/StartPage.tsx"));
const Quiz = lazy(() => import("./Quiz/Quiz.tsx"));
import { QuizState, QuizQuestion, QuizResult } from "../store.tsx";

interface QuizzerProps {
  quizData: QuizState;
  handleSetQuizData: (data: QuizState | null) => void;
}

const Quizzer = ({ quizData, handleSetQuizData }: QuizzerProps) => {
  const [quizState, setQuizState] = useState({
    started: false,
    completed: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  // Create an object with keys as question numbers and values as "Not Answered"
  const initialResults = useMemo(
    () =>
      quizData.map((question, idx) => ({
        selectedAnswer: "Not Answered",
        correctlyAnswered: false,
        pickedAnswerIndex: -1,
        correctAnswer: question.correctAnswer,
        category: question.category,
        questionText: question.question.text,
        questionNum: idx + 1,
      })),
    [quizData]
  );

  const [results, setResults] = useState<QuizResult[]>(initialResults);

  const handleSetQuizState = useCallback(
    (newState: { started: boolean; completed: boolean }) => {
      setQuizState(newState);
    },
    [setQuizState]
  );

  const handleSetResults = useCallback(
    (
      questionData: QuizQuestion,
      selectedAnswer: string,
      pickedAnswerIndex: number
    ) => {
      setResults((prevResults) => {
        const newResults = [...prevResults];
        newResults[activeStep] = {
          selectedAnswer: selectedAnswer,
          pickedAnswerIndex: pickedAnswerIndex,
          correctlyAnswered: selectedAnswer === questionData.correctAnswer,
          correctAnswer: questionData.correctAnswer,
          questionNum: activeStep + 1,
          category: questionData.category,
          questionText: questionData.question.text,
        };
        return newResults;
      });
    },
    [activeStep, setResults]
  );

  const handleSetTimeLimit = useCallback(
    (timeLimit: { minutes: number; seconds: number }) => {
      setTimeLimit(timeLimit);
    },
    [setTimeLimit]
  );

  const handleSetActiveStep = useCallback(
    (step: number) => setActiveStep(step),
    [setActiveStep]
  );

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setQuizState({ started: false, completed: false });
    setResults(initialResults);
  }, [initialResults, setActiveStep, setQuizState, setResults]);

  const resetQuizData = useCallback(() => {
    handleSetQuizData(null);
  }, [handleSetQuizData]);

  const completeQuiz = useCallback(() => {
    setQuizState((prevQuizState) => ({ ...prevQuizState, completed: true }));
  }, [setQuizState]);

  // Check if all questions are answered
  const allQuestionsAnswered = useMemo(
    () =>
      results.filter((result) => result.selectedAnswer === "Not Answered")
        .length === 0,
    [results]
  );

  useEffect(() => {
    // Reset Quiz when quizData changes
    handleReset();
  }, [quizData, handleReset]);

  useEffect(() => {
    // if all questions are answered complete the quiz
    if (allQuestionsAnswered) {
      completeQuiz();
    }
  }, [results, allQuestionsAnswered, completeQuiz]);

  const ControlsAndStepper = () => (
    <>
      <QuizControls
        activeStep={activeStep}
        handleSetActiveStep={handleSetActiveStep}
        completeQuiz={completeQuiz}
        quizData={quizData}
        quizState={quizState}
        results={results}
        handleReset={handleReset}
        allQuestionsAnswered={allQuestionsAnswered}
      />
      <QuizStepper
        quizData={quizData}
        activeStep={activeStep}
        handleSetActiveStep={handleSetActiveStep}
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
        alignItems: "center",
        py: 5,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: {
          xs: "url(./svgs/curvy-line.svg)",
          md: "url(./svgs/animated-shapes.svg)",
        },
      }}
    >
      <Button
        variant="outlined"
        // Emptying quizData renders the FrontPage, Quiz is only rendered if quizData has data
        onClick={resetQuizData}
        size="small"
        sx={{
          alignSelf: "flex-start",
          mx: "10%",
          my: 2,
        }}
        color="info"
        startIcon={<NavigateBeforeIcon />}
      >
        Back to Frontpage
      </Button>
      {quizState.completed && (
        <ResultsModal
          setActiveStep={setActiveStep}
          results={results}
          handleReset={handleReset}
          totalQuestions={quizData!.length}
        />
      )}

      {quizState.started ? (
        activeStep === quizData.length ? (
          // If last step render results
          <>
            <Results results={results} timeLimit={timeLimit} />
            <ControlsAndStepper />
          </>
        ) : (
          <Suspense fallback={<QuizSkeleton />}>
            <Quiz
              questionData={quizData[activeStep]}
              handleSetResults={handleSetResults}
              results={results}
              activeStep={activeStep}
              timeLimit={timeLimit}
              quizState={quizState}
              handleSetQuizState={handleSetQuizState}
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
            handleSetTimeLimit={handleSetTimeLimit}
            quizState={quizState}
            handleSetQuizState={handleSetQuizState}
            quizData={quizData}
            resetQuizData={resetQuizData}
          />
        </Suspense>
      )}
    </Box>
  );
};
export default Quizzer;
