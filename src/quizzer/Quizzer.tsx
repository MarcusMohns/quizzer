import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import QuizStepper from "./components/QuizStepper.tsx";
import QuizControls from "./components/QuizControls.tsx";
import Results from "./components/Results.tsx";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StartPageSkeleton from "./components/start-page/components/StartPageSkeleton.tsx";
import QuizSkeleton from "./quiz/components/QuizSkeleton.tsx";
import useQuizzer from "./useQuizzer.ts";
import { QuizState } from "../store.tsx";

const StartPage = lazy(() => import("./components/start-page/StartPage.tsx"));
const Quiz = lazy(() => import("./quiz/Quiz.tsx"));

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
    <Paper elevation={3} sx={{ p: 2 }}>
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
    </Paper>
  );
  return (
    <Container maxWidth="md" sx={{ py: 5, pb: { xs: 10, md: 30 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          // Emptying quizData renders the FrontPage, Quiz is only rendered if quizData has data
          onClick={resetQuizData}
          size="small"
          sx={{
            alignSelf: "flex-start",
          }}
          color="info"
          startIcon={<NavigateBeforeIcon />}
        >
          Back to Frontpage
        </Button>
        <Paper
          elevation={3}
          sx={{
            minHeight: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "transparent",
          }}
        >
          {quizState.started ? (
            activeStep === quizData.length ? (
              // If last step and quiz is started render results
              <Results results={results} timeLimit={timeLimit} />
            ) : (
              // If not last step render quiz
              <Suspense fallback={<QuizSkeleton />}>
                <Quiz
                  questionData={quizData[activeStep]}
                  handleSetResults={handleSetResults}
                  results={results}
                  handleReset={handleReset}
                  activeStep={activeStep}
                  timeLimit={timeLimit}
                  quizState={quizState}
                  handleSetQuizState={handleSetQuizState}
                  handleSetActiveStep={handleSetActiveStep}
                />
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
        </Paper>
        {quizState.started && <ControlsAndStepper />}
      </Box>
    </Container>
  );
};
export default Quizzer;
