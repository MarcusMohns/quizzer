import Box from "@mui/material/Box";
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
  const isLastStep = () => activeStep === quizData.length - 1;

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allQuestionsAnswered && !quizState.completed
        ? results.findIndex(
            (result) => result.selectedAnswer === "Not Answered"
          )
        : activeStep + 1;
    handleSetActiveStep(newActiveStep);
  };

  const handleBack = () => {
    handleSetActiveStep(activeStep - 1);
  };

  const ButtonStack = (props: { children: React.ReactNode }) => (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "92%", md: "60%", lg: "40%", xl: "30%" },
        my: "30px",
      }}
      direction="row"
      spacing={{ xs: 1, md: 2 }}
    >
      {props.children}
    </Stack>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ButtonStack>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: "50%", height: "100%" }}
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
          sx={{ width: "50%", height: "100%" }}
          endIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      </ButtonStack>
      <ButtonStack>
        <Button
          onClick={handleReset}
          variant="outlined"
          color="error"
          size="large"
          startIcon={<RestartAltIcon />}
          sx={{
            width: "50%",
            backgroundColor: "background.default",
          }}
        >
          Reset Quiz
        </Button>
        {quizState.completed ? (
          activeStep !== quizData.length && (
            <Button
              onClick={() => handleSetActiveStep(quizData.length)}
              color="info"
              variant="outlined"
              size="large"
              startIcon={<DvrIcon />}
              sx={{
                width: "50%",
                backgroundColor: "background.default",
              }}
            >
              Results
            </Button>
          )
        ) : (
          <Button
            onClick={completeQuiz}
            color="success"
            variant="outlined"
            sx={{
              width: "50%",
              backgroundColor: "background.default",
            }}
            size="large"
            endIcon={<DoneAllIcon />}
          >
            Complete
          </Button>
        )}
      </ButtonStack>
    </Box>
  );
};
export default QuizControls;
