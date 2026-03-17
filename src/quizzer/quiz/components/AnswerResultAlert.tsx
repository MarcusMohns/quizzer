import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Zoom from "@mui/material/Zoom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { QuizQuestion } from "../../../store";
import { alpha } from "@mui/material/styles";

interface AnswerResultAlertProps {
  correctlyAnswered: boolean;
  questionData: QuizQuestion;
  alertShown: boolean;
  handleNextQuestion: () => void;
  isLastQuestion: boolean;
}

const AnswerResultAlert = ({
  correctlyAnswered,
  questionData,
  alertShown,
  handleNextQuestion,
  isLastQuestion,
}: AnswerResultAlertProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(alertShown);
  }, [alertShown]);

  const handleClose = () => setOpen(false);

  const onNextClick = () => {
    handleClose();
    handleNextQuestion();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Zoom in={open}>
        <Box
          sx={{
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            outline: "none",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: "50%",
              bgcolor: (theme) =>
                alpha(
                  correctlyAnswered
                    ? theme.palette.success.main
                    : theme.palette.error.main,
                  0.1,
                ),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            {correctlyAnswered ? (
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
            ) : (
              <CancelOutlinedIcon color="error" sx={{ fontSize: 60 }} />
            )}
          </Box>

          <Typography
            variant="h5"
            component="h2"
            color={correctlyAnswered ? "success.main" : "error.main"}
            fontWeight="bold"
            gutterBottom
          >
            {correctlyAnswered ? "Correct!" : "Incorrect!"}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            The correct answer was:
          </Typography>

          <Typography
            variant="body1"
            component="div"
            fontWeight="bold"
            color="text.primary"
            sx={{ fontSize: "1.1rem", mb: 2 }}
          >
            {questionData.correctAnswer}
          </Typography>
          <Button
            onClick={onNextClick}
            variant="contained"
            color={isLastQuestion ? "success" : "primary"}
            size="large"
            endIcon={isLastQuestion ? <DoneAllIcon /> : <NavigateNextIcon />}
            sx={{ width: "100%", borderRadius: 2, py: 1.5 }}
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </Button>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default AnswerResultAlert;
