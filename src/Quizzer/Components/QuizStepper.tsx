import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Tooltip from "@mui/material/Tooltip";
import DvrIcon from "@mui/icons-material/Dvr";
import { QuizState } from "../../store";

interface QuizStepperProps {
  quizData: QuizState;
  activeStep: number;
  handleSetActiveStep: (step: number) => void;
  results: { [key: string]: string };
  quizState: {
    started: boolean;
    completed: boolean;
  };
}

export default function QuizStepper({
  quizData,
  activeStep,
  handleSetActiveStep,
  results,
  quizState,
}: QuizStepperProps) {
  const handleStep = (step: number) => () => {
    handleSetActiveStep(step);
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 5 },
        pb: 4,
        pt: 2,
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
          justifyContent: "center",
        }}
        connector={<>―</>}
      >
        {quizData.map((step, index) => (
          <Tooltip title={step.question.text} key={step.question.text}>
            <Step
              completed={results[index] !== "Not Answered"}
              sx={{ m: 1, ml: 2 }}
            >
              <StepButton
                onClick={handleStep(index)}
                aria-label={`step-${index}`}
              />
            </Step>
          </Tooltip>
        ))}
        <Tooltip title="Results">
          <Step>
            <StepButton
              name="Result"
              onClick={handleStep(quizData.length)}
              icon={<DvrIcon sx={{ ml: 1, pr: 0 }} />}
              disabled={!quizState.completed}
            >
              Results
            </StepButton>
          </Step>
        </Tooltip>
      </Stepper>
    </Box>
  );
}
