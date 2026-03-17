import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Tooltip from "@mui/material/Tooltip";
import DvrIcon from "@mui/icons-material/Dvr";
import { QuizState, QuizResult } from "../../store";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const DashedConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.divider,
    borderTopStyle: "dashed",
    borderTopWidth: 2,
  },
}));

interface QuizStepperProps {
  quizData: QuizState;
  activeStep: number;
  handleSetActiveStep: (step: number) => void;
  results: QuizResult[];
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
    <Box sx={{ width: "100%", pt: 2 }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        connector={<DashedConnector />}
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {quizData.map((step, index) => {
          const completed = results[index].selectedAnswer !== "Not Answered";
          return (
            <Tooltip title={step.question.text} key={step.question.text}>
              <Step completed={completed} sx={{ ml: 1 }}>
                <StepButton
                  onClick={handleStep(index)}
                  sx={{
                    borderRadius: "50%",
                  }}
                  icon={
                    !completed ? null : results[index].correctlyAnswered ? (
                      <CheckCircleOutlineOutlinedIcon
                        color="success"
                        fontSize="medium"
                      />
                    ) : (
                      <CancelOutlinedIcon color="error" fontSize="medium" />
                    )
                  }
                />
              </Step>
            </Tooltip>
          );
        })}

        <Tooltip title="Results">
          <Step completed={quizState.completed}>
            <StepButton
              onClick={handleStep(quizData.length)}
              icon={<DvrIcon />}
              disabled={!quizState.completed}
              sx={{
                borderRadius: "50%",
              }}
            />
          </Step>
        </Tooltip>
      </Stepper>
    </Box>
  );
}
