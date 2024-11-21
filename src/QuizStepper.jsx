import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export default function QuizStepper({
  steps,
  activeStep,
  setActiveStep,
  completed,
}) {
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
        sx={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        {steps.map((label, index) => (
          <Tooltip title={label.question} key={label.question}>
            <Step completed={completed[index]} sx={{ m: 1 }}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    height: "20px",
                    maxWidth: "100px",
                  }}
                >
                  {label.question}
                </Typography>
              </StepButton>
            </Step>
          </Tooltip>
        ))}
      </Stepper>
    </Box>
  );
}
