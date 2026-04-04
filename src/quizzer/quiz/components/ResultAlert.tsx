import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Zoom from "@mui/material/Zoom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ReplayIcon from "@mui/icons-material/Replay";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { QuizQuestion } from "../../../store";
import { alpha } from "@mui/material/styles";

interface ResultAlertProps {
  correctlyAnswered: boolean;
  questionData: QuizQuestion;
  alertShown: boolean;
  handleReset: () => void;
  handleNextQuestion: () => void;
  handleGoToResults: () => void;
  quizCompleted: boolean;
}

const ResultAlert = ({
  correctlyAnswered,
  questionData,
  alertShown,
  handleReset,
  handleNextQuestion,
  handleGoToResults,
  quizCompleted,
}: ResultAlertProps) => {
  const [open, setOpen] = useState(false);
  const prevQuestionId = useRef(questionData.id);
  const prevAlertShown = useRef(alertShown);

  // Latch the data to display so it doesn't change during exit transitions when props update
  const [displayData, setDisplayData] = useState({
    correctlyAnswered,
    correctAnswer: questionData.correctAnswer,
    quizCompleted,
    wasSkipped: !alertShown,
  });

  useEffect(() => {
    const questionChanged = questionData.id !== prevQuestionId.current;
    const alertBecameTrue = alertShown && !prevAlertShown.current;

    if (questionChanged) {
      setOpen(false);
      prevQuestionId.current = questionData.id;
    } else if (alertBecameTrue || quizCompleted) {
      setOpen(true);
    }
    prevAlertShown.current = alertShown;

    if (alertShown || quizCompleted) {
      setDisplayData({
        correctlyAnswered,
        correctAnswer: questionData.correctAnswer,
        quizCompleted,
        wasSkipped: !alertShown,
      });
    }
  }, [alertShown, correctlyAnswered, questionData, quizCompleted]);

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
            width: { xs: "90%", sm: 420 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
            border: displayData.quizCompleted ? "3px solid" : "none",
            borderColor: (theme) => alpha(theme.palette.primary.main, 0.5),
            outline: "none",
            textAlign: "center",
            display: "flex",
            background: (theme) =>
              displayData.quizCompleted
                ? `linear-gradient(to bottom, ${theme.palette.background.paper}, ${alpha(theme.palette.primary.main, 0.05)})`
                : theme.palette.background.paper,
            flexDirection: "column",
            alignItems: "center",
            gap: displayData.quizCompleted ? 0.5 : 1,
          }}
        >
          {displayData.quizCompleted ? (
            <Box sx={{ mb: 2 }}>
              <EmojiEventsIcon
                color="primary"
                sx={{
                  fontSize: 70,
                  mb: 1,
                  filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))",
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "900",
                  color: "text.primary",
                  fontSize: "2.2rem",
                }}
              >
                Quiz Finished!
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                }}
              >
                <CelebrationIcon fontSize="small" /> All questions answered
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                p: 1,
                borderRadius: "50%",
                bgcolor: (theme) =>
                  alpha(
                    displayData.correctlyAnswered
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                    0.1,
                  ),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              {displayData.correctlyAnswered ? (
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: 30 }} />
              ) : (
                <CancelOutlinedIcon color="error" sx={{ fontSize: 30 }} />
              )}
            </Box>
          )}

          {/* Result Section: Large feedback for standard vs Compact box for completion */}
          {!displayData.quizCompleted ? (
            <Box
              sx={{
                mb: 3,
                p: 2.5,
                bgcolor: (theme) =>
                  alpha(
                    displayData.correctlyAnswered
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                    0.1,
                  ),
                borderRadius: 4,
                border: "1px dashed",
                borderColor: (theme) =>
                  alpha(
                    displayData.correctlyAnswered
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                    0.3,
                  ),
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                color={
                  displayData.correctlyAnswered ? "success.main" : "error.main"
                }
                fontWeight="bold"
                gutterBottom
              >
                {displayData.correctlyAnswered ? "Correct!" : "Incorrect!"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Correct answer: <strong>{displayData.correctAnswer}</strong>
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                mb: 2,
                p: 1.5,
                bgcolor: (theme) =>
                  alpha(
                    displayData.wasSkipped
                      ? theme.palette.text.disabled
                      : displayData.correctlyAnswered
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                    0.1,
                  ),
                borderRadius: 3,
                border: "1px dashed",
                borderColor: (theme) =>
                  alpha(
                    displayData.wasSkipped
                      ? theme.palette.divider
                      : displayData.correctlyAnswered
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                    0.3,
                  ),
                width: "100%",
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color={
                  displayData.wasSkipped
                    ? "text.secondary"
                    : displayData.correctlyAnswered
                      ? "success.main"
                      : "error.main"
                }
              >
                Current Question:{" "}
                {displayData.wasSkipped
                  ? "Skipped"
                  : displayData.correctlyAnswered
                    ? "Correct"
                    : "Incorrect"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Correct answer: <strong>{displayData.correctAnswer}</strong>
              </Typography>
            </Box>
          )}

          {/* Actions Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mt: 1,
            }}
          >
            {displayData.quizCompleted ? (
              <>
                <Button
                  onClick={handleGoToResults}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  startIcon={<AssessmentIcon />}
                  sx={{ borderRadius: 2, py: 1.5, fontWeight: "bold" }}
                >
                  View Results
                </Button>
                <Button
                  onClick={handleReset}
                  variant="text"
                  color="inherit"
                  size="small"
                  startIcon={<ReplayIcon />}
                  sx={{ borderRadius: 2, opacity: 0.7 }}
                >
                  Restart Quiz
                </Button>
              </>
            ) : (
              <Button
                onClick={onNextClick}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                endIcon={<NavigateNextIcon />}
                sx={{ borderRadius: 2, py: 1.5, fontWeight: "bold" }}
              >
                Next Question
              </Button>
            )}
          </Box>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default ResultAlert;
