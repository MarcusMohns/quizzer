import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  bgcolor: "secondary.dark",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

//prop validate

export default function ResultsModal({
  handleReset,
  setActiveStep,
  results,
  lastStep,
}) {
  ResultsModal.propTypes = {
    handleReset: PropTypes.func.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    lastStep: PropTypes.number.isRequired,
  };
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleResetClick = () => {
    handleClose();
    handleReset();
  };
  const handleResultClick = () => {
    handleClose();
    setActiveStep(lastStep);
  };

  const totalQuestions = Object.values(results).length;
  const correctAnswers = Object.values(results).filter(
    (result) => result[0]
  ).length;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {correctAnswers} correct out of {totalQuestions} total questions!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Well done! :)
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={{ alignSelf: "center" }}>
            <Button
              onClick={handleResetClick}
              size="large"
              variant="outlined"
              sx={{ m: 2 }}
            >
              <RestartAltIcon /> Reset
            </Button>
            <Button
              onClick={handleResultClick}
              size="large"
              variant="contained"
              sx={{ m: 2 }}
            >
              Full Results
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
