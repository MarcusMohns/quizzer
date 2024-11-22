import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const QuizControls = ({
  activeStep,
  setActiveStep,
  setCompleted,
  completed,
  steps,
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

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Box>
            <Box />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mr: "auto" }}>Step {activeStep + 1}</Typography>
          <Box>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button onClick={handleNext}>Next</Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: "inline-block" }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? "Finish"
                    : "Complete Step"}
                </Button>
              ))}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default QuizControls;
