import React from "react";
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
        <React.Fragment>
          <Typography>Quiz completed! </Typography>
          <Box>
            <Box />
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={() => setActiveStep(totalSteps())}>
              Go the the Results!{" "}
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mr: "auto" }}>Question {activeStep + 1}</Typography>
          <Box>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button onClick={handleNext}>Next</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default QuizControls;
