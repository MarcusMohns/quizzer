import { useCallback, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DvrIcon from "@mui/icons-material/Dvr";
import { QuizState, QuizResult } from "../../store";

interface QuizControlsProps {
  quizData: QuizState;
  activeStep: number;
  handleSetActiveStep: (step: number) => void;
  completeQuiz: () => void;
  results: QuizResult[];
  handleReset: () => void;
  allQuestionsAnswered: boolean;
  quizState: {
    started: boolean;
    completed: boolean;
  };
}

const QuizControls = ({
  quizData,
  activeStep,
  handleSetActiveStep,
  completeQuiz,
  results,
  handleReset,
  allQuestionsAnswered,
  quizState,
}: QuizControlsProps) => {
  const isLastStep = useCallback(
    () => activeStep === quizData.length - 1,
    [activeStep, quizData.length],
  );

  const handleNext = useCallback(() => {
    const newActiveStep =
      isLastStep() && !allQuestionsAnswered && !quizState.completed
        ? results.findIndex(
            (result) => result.selectedAnswer === "Not Answered",
          )
        : activeStep + 1;
    handleSetActiveStep(newActiveStep);
  }, [
    activeStep,
    allQuestionsAnswered,
    handleSetActiveStep,
    isLastStep,
    results,
    quizState.completed,
  ]);

  const handleBack = useCallback(() => {
    handleSetActiveStep(activeStep - 1);
  }, [activeStep, handleSetActiveStep]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && activeStep > 0) {
        handleBack();
      } else if (event.key === "ArrowRight" && activeStep < quizData.length) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStep, quizData.length, handleBack, handleNext]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="contained"
          color="primary"
          size="large"
          sx={{ flex: 1 }}
          startIcon={<NavigateBeforeIcon />}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === quizData.length}
          variant="contained"
          color="primary"
          size="large"
          sx={{ flex: 1 }}
          endIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleReset}
          variant="contained"
          color="error"
          size="large"
          sx={{ flex: 1 }}
          startIcon={<RestartAltIcon />}
        >
          Reset Quiz
        </Button>
        {quizState.completed ? (
          activeStep !== quizData.length && (
            <Button
              onClick={() => handleSetActiveStep(quizData.length)}
              color="info"
              variant="contained"
              size="large"
              sx={{ flex: 1 }}
              startIcon={<DvrIcon />}
            >
              Results
            </Button>
          )
        ) : (
          <Button
            onClick={completeQuiz}
            color="success"
            variant="contained"
            sx={{ flex: 1 }}
            size="large"
            endIcon={<DoneAllIcon />}
          >
            Complete
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
export default QuizControls;
