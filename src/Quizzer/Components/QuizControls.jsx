import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
    // TODO CLEAN THIS UP PLS
    const newActiveStep = !quizState.completed
      ? isLastStep() && !allQuestionsAnswered
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          Object.values(results).findIndex(
            (result) => result === "Not Answered"
          )
        : activeStep + 1
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack sx={{ display: "flex", width: "30%" }} direction="row" spacing={2}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="contained"
          color="secondary"
          size="large"
          sx={{ width: "100%", height: "100%" }}
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
          sx={{ width: "100%", height: "100%" }}
          endIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          width: "30%",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "60px",
        }}
        direction="column-reverse"
        spacing={2}
      >
        <Button
          onClick={handleReset}
          variant="outlined"
          color="error"
          sx={{ width: "30%", height: "50%" }}
          size="large"
          startIcon={<RestartAltIcon />}
        >
          Reset
        </Button>

        <Button
          onClick={completeQuiz}
          color="success"
          variant="outlined"
          sx={{
            width: "50%",
            height: "50%",
            visibility: !quizState.completed ? "visible" : "hidden",
          }}
          size="large"
          endIcon={<DoneAllIcon />}
        >
          Complete All
        </Button>
      </Stack>
    </Box>
  );
};

export default QuizControls;
