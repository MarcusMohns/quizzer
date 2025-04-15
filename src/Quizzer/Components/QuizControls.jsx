import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DvrIcon from "@mui/icons-material/Dvr";

const QuizControls = ({
  steps,
  activeStep,
  setActiveStep,
  completeQuiz,
  results,
  handleReset,
  allQuestionsAnswered,
  quizState,
}) => {
  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allQuestionsAnswered && !quizState.completed
        ? Object.values(results).findIndex(
            (result) => result === "Not Answered"
          )
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const ButtonStack = (props) => (
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
          color="secondary"
          size="large"
          sx={{ width: "50%", height: "100%" }}
          startIcon={<NavigateBeforeIcon />}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === steps.length}
          variant="contained"
          color="secondary"
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
          activeStep !== steps.length && (
            <Button
              onClick={() => setActiveStep(steps.length)}
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
