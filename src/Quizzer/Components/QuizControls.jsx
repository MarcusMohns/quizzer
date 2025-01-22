import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const QuizControls = ({
  steps,
  activeStep,
  setActiveStep,
  completed,
  handleReset,
}) => {
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
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
        justifyContent: "center",
        p: 2,
        alignSelf: "flex-end",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="outlined"
          sx={{ m: 2, px: 5, py: 2 }}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === steps.length}
          variant="contained"
          sx={{ m: 2, px: 5, py: 2 }}
        >
          Next
        </Button>
      </Box>
      {allStepsCompleted() && (
        <Button onClick={handleReset} variant="outlined" sx={{ m: 2 }}>
          <RestartAltIcon /> Reset
        </Button>
      )}
      {/* make complete button complete all the questions  */}
      {isLastStep() && (
        <Button
          onClick={() => setActiveStep(steps.length)}
          variant="outlined"
          sx={{ m: 2 }}
        >
          <RestartAltIcon /> Complete Quiz
        </Button>
      )}
    </Box>
  );
};

export default QuizControls;
