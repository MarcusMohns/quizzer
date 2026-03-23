import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DvrIcon from "@mui/icons-material/Dvr";
import Fade from "@mui/material/Fade";
import { QuizResult } from "../../store";
import { alpha, useTheme } from "@mui/material/styles";

interface ResultsModalProps {
  handleReset: () => void;
  setActiveStep: (step: number) => void;
  results: QuizResult[];
  totalQuestions: number;
}

export default function ResultsModal({
  handleReset,
  setActiveStep,
  results,
  totalQuestions,
}: ResultsModalProps) {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const handleClose = () => setOpen(false);

  const handleResetClick = () => {
    handleClose();
    handleReset();
  };

  const handleResultClick = () => {
    handleClose();
    setActiveStep(totalQuestions);
  };

  const correctAnswers = results.reduce(
    (count, result) => count + (result.correctlyAnswered ? 1 : 0),
    0,
  );

  useEffect(() => {
    if (correctAnswers === totalQuestions) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 2000,
      });
    }
  }, [correctAnswers, totalQuestions]);

  const isPassing = correctAnswers > 0;
  const isPerfect = correctAnswers === totalQuestions;
  const statusColor = isPerfect
    ? theme.palette.success.main
    : isPassing
      ? theme.palette.info.dark
      : theme.palette.error.main;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade
        in={open}
        timeout={{ enter: 300, exit: 0 }}
        easing={{ enter: "ease", exit: "" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            outline: "none",
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              bgcolor: alpha(statusColor, 0.1),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              fontSize={30}
            >
              {isPerfect ? "🏆" : isPassing ? "🎉" : "💪"}
            </Typography>
          </Box>

          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: statusColor }}
          >
            {correctAnswers < 2
              ? "Nice try!"
              : correctAnswers === totalQuestions
                ? "Perfect!"
                : "Well done!"}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            You got <strong>{correctAnswers}</strong> correct out of{" "}
            <strong>{totalQuestions}</strong> questions!
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              onClick={handleResetClick}
              size="large"
              variant="outlined"
              color="error"
              sx={{ flex: 1, borderRadius: 2 }}
              startIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
            <Button
              onClick={handleResultClick}
              size="large"
              variant="contained"
              color="primary"
              sx={{ flex: 1, borderRadius: 2, boxShadow: 2 }}
              startIcon={<DvrIcon />}
            >
              Full Results
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}
