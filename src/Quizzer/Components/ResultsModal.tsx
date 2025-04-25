import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DvrIcon from "@mui/icons-material/Dvr";
import Fade from "@mui/material/Fade";
import { QuizResult } from "../../store";

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
    0
  );

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
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h3">
            {correctAnswers < 2
              ? "Nice try! 🌠"
              : correctAnswers === totalQuestions
              ? "Perfect! 🌠"
              : "Well done! 🌠"}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h4" py={2}>
            {`${correctAnswers} correct out of ${totalQuestions} total questions! 🎉`}
          </Typography>

          <Box
            sx={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <Button
              onClick={handleResetClick}
              size="medium"
              variant="outlined"
              color="error"
              sx={{ m: 1 }}
              startIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
            <Button
              onClick={handleResultClick}
              size="medium"
              variant="outlined"
              color="info"
              sx={{ m: 1 }}
              startIcon={<DvrIcon />}
            >
              Full Results
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
