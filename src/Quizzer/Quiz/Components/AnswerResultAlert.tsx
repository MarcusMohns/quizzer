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

const StyledAlert = (props: StyledAlertProps) => {
  return (
    <Zoom in={true}>
      <Alert
        variant="outlined"
        severity={props.severity}
        sx={{
          m: 2,
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <AlertTitle
          sx={{
            display: { xs: "none", sm: "flex" },
            fontSize: "1.1rem",
            color: props.severity === "success" ? "success.main" : "error.main",
          }}
        >
          {props.title}
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
              fontWeight: "bold",
              fontSize: "1.1rem",
              color:
                props.severity === "success" ? "success.main" : "error.main",
            }}
          >
            {props.correctAnswer}
          </Box>
        </Typography>
      </Alert>
    </Zoom>
  );
};

interface AnswerResultAlertProps {
  correctlyAnswered: boolean;
  questionData: QuizQuestion;
  alertShown: boolean;
}

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
