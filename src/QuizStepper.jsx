import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import DvrIcon from "@mui/icons-material/Dvr";

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
        p: 5,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        flexGrow: "1",
      }}
    >
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{
          flexWrap: "wrap",
          borderRadius: "5px",
          px: 5,
        }}
        connector={<>―</>}
      >
        {steps.map((step, index) => (
          <Tooltip title={step.question.text} key={step.question.text}>
            <Step completed={completed[index]} sx={{ m: 1, ml: 2 }}>
              <StepButton onClick={handleStep(index)} />
            </Step>
          </Tooltip>
        ))}
        <Tooltip title="Results">
          <Step>
            <StepButton
              onClick={handleStep(steps.length)}
              icon={<DvrIcon sx={{ ml: 1, pr: 0 }} />}
            >
              Results
            </StepButton>
          </Step>
        </Tooltip>
      </Stepper>
    </Box>
  );
}
