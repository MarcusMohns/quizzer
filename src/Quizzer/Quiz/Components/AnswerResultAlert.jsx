import React from "react";
import Zoom from "@mui/material/Zoom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AlertTitle from "@mui/material/AlertTitle";
import { Typography } from "@mui/material";

const StyledAlert = (props) => {
  return (
    <Zoom in={true}>
      <Alert variant="outlined" severity={props.severity} sx={{ m: 2 }}>
        <AlertTitle sx={{ display: { xs: "none", sm: "block" } }}>
          {props.title}
        </AlertTitle>
        The correct answer was:{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: "bold",
            ml: 0.2,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            height: "100%",
          }}
        >
          {props.correctAnswer}
        </Typography>
      </Alert>
    </Zoom>
  );
};

const AnswerResultAlert = ({ correctlyAnswered, questionData, alertShown }) => {
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
