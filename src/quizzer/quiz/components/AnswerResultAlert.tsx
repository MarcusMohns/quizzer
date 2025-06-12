import Zoom from "@mui/material/Zoom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AlertTitle from "@mui/material/AlertTitle";
import { Typography } from "@mui/material";
import { QuizQuestion } from "../../../store";

interface StyledAlertProps {
  severity: "error" | "info" | "success" | "warning" | "info";
  title: string;
  correctAnswer: string;
}

interface AnswerResultAlertProps {
  correctlyAnswered: boolean;
  questionData: QuizQuestion;
  alertShown: boolean;
}

const StyledAlert = ({ severity, title, correctAnswer }: StyledAlertProps) => {
  return (
    <Zoom in={true}>
      <Alert
        variant="outlined"
        severity={severity}
        sx={{
          m: 2,
          backgroundColor: "background.default",
          color: "text.primary",
          boxShadow: 2,
        }}
      >
        <AlertTitle
          sx={{
            display: { xs: "none", sm: "flex" },
            fontSize: "1.1rem",
            color: severity === "success" ? "success.main" : "error.main",
          }}
        >
          {title}
        </AlertTitle>
        <Typography
          component="span"
          sx={{
            height: "100%",
          }}
        >
          The correct answer was:{" "}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              fontSize: "1.1rem",
              color: severity === "success" ? "success.main" : "error.main",
            }}
          >
            {correctAnswer}
          </Box>
        </Typography>
      </Alert>
    </Zoom>
  );
};

const AnswerResultAlert = ({
  correctlyAnswered,
  questionData,
  alertShown,
}: AnswerResultAlertProps) => {
  return (
    <Box sx={{ minHeight: { xs: "120px", sm: "150px" } }}>
      {alertShown &&
        (correctlyAnswered ? (
          <StyledAlert
            severity="success"
            title="Correct!"
            correctAnswer={questionData.correctAnswer}
          />
        ) : (
          <StyledAlert
            severity="error"
            title="Incorrect!"
            correctAnswer={questionData.correctAnswer}
          />
        ))}
    </Box>
  );
};

export default AnswerResultAlert;
