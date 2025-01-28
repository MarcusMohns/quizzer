import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DvrIcon from "@mui/icons-material/Dvr";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "secondary.cool",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default function ResultsModal({
  handleReset,
  setActiveStep,
  results,
  totalQuestions,
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const handleResetClick = () => {
    handleClose();
    handleReset();
  };
  const handleResultClick = () => {
    handleClose();
    setActiveStep(totalQuestions);
  };

  const correctAnswers = Object.values(results).filter(
    (result) => Object.values(result)[0] === true
  ).length;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      aria-hidden="false"
    >
      <Fade
        timeout={{ enter: 300, exit: 0 }}
        in={open}
        easing={{ enter: "ease", exit: "" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {correctAnswers} correct out of {totalQuestions} total questions! 🎉
          </Typography>

          <Box
            sx={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              onClick={handleResetClick}
              size="medium"
              variant="outlined"
              sx={{ m: 2 }}
              startIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
            <Button
              onClick={handleResultClick}
              size="medium"
              variant="contained"
              sx={{ m: 2 }}
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
