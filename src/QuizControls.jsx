import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const QuizControls = ({
  activeStep,
  setActiveStep,
  setCompleted,
  completed,
  steps,
  setResults,
}) => {
  QuizControls.propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    completed: PropTypes.object.isRequired,
    setCompleted: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    setResults: PropTypes.func.isRequired,
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
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

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setResults({});
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 2,
        alignSelf: "flex-end",
        width: "100%",
      }}
    >
      {allStepsCompleted() ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography>Quiz completed! </Typography>
          <Box>
            <Box />
            <Button
              onClick={handleReset}
              size="large"
              variant="outlined"
              sx={{ m: 2 }}
            >
              Reset
            </Button>
            <Button
              onClick={() => setActiveStep(totalSteps())}
              size="large"
              variant="contained"
              sx={{ m: 2 }}
            >
              Go the the Results!{" "}
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            size="large"
            variant="outlined"
            sx={{ m: 2, px: 5, py: 2 }}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            size="large"
            variant="contained"
            sx={{ m: 2, px: 5, py: 2 }}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default QuizControls;
