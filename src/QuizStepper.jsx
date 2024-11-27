import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";

export default function QuizStepper({
  steps,
  activeStep,
  setActiveStep,
  completed,
}) {
  QuizStepper.propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    completed: PropTypes.object.isRequired,
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, index) => (
          <Tooltip title={step.question.text} key={step.question.text}>
            <Step completed={completed[index]} sx={{ m: 1 }}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "100px",
                    m: 1,
                  }}
                >
                  {step.question.text}
                </Typography>
              </StepButton>
            </Step>
          </Tooltip>
        ))}
      </Stepper>
    </Box>
  );
}
