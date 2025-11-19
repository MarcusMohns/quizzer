import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./components/QuizStepper.tsx";
import QuizControls from "./components/QuizControls.tsx";
import Results from "./components/Results.tsx";
import ResultsModal from "./components/ResultsModal.tsx";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StartPageSkeleton from "./components/start-page/components/StartPageSkeleton.tsx";
import QuizSkeleton from "./quiz/components/QuizSkeleton.tsx";
const StartPage = lazy(() => import("./components/start-page/StartPage.tsx"));
const Quiz = lazy(() => import("./quiz/Quiz.tsx"));
import useQuizzer from "./useQuizzer.ts";
import { QuizState } from "../store.tsx";

interface QuizzerProps {
  quizData: QuizState;
  handleSetQuizData: (data: QuizState | null) => void;
}

const Quizzer = ({ quizData, handleSetQuizData }: QuizzerProps) => {
  const {
    handleSetQuizState,
    handleSetActiveStep,
    activeStep,
    results,
    quizState,
    completeQuiz,
    handleReset,
    allQuestionsAnswered,
    resetQuizData,
    timeLimit,
    handleSetTimeLimit,
    handleSetResults,
  } = useQuizzer({
    quizData,
    handleSetQuizData,
  });
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
          setActiveStep={handleSetActiveStep}
          results={results}
          handleReset={handleReset}
          totalQuestions={quizData!.length}
        />
      )}

      {quizState.started ? (
        activeStep === quizData.length ? (
          // If last step and quiz is started render results
          <>
            <Results results={results} timeLimit={timeLimit} />
            <ControlsAndStepper />
          </>
        ) : (
          // If not last step render quiz
          <Suspense fallback={<QuizSkeleton />}>
            <Quiz
              questionData={quizData[activeStep]}
              handleSetResults={handleSetResults}
              results={results}
              activeStep={activeStep}
              timeLimit={timeLimit}
              quizState={quizState}
              handleSetQuizState={handleSetQuizState}
            />
            <ControlsAndStepper />
          </Suspense>
        )
      ) : (
        // If not started render StartPage
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
