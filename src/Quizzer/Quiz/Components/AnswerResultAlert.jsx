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
        <AlertTitle>{props.title}</AlertTitle>
        {props.text}
        <Typography
          component="span"
          sx={{
            fontWeight: "bold",
            ml: 0.2,
            fontSize: "1.2rem",
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
    <Box sx={{ minHeight: { xs: "100px", sm: "130px" } }}>
      {alertShown &&
        (correctlyAnswered ? (
          <StyledAlert
            severity="success"
            title="Correct!"
            text="The correct answer was indeed: "
            correctAnswer={questionData.correctAnswer}
          />
        ) : (
          <StyledAlert
            severity="error"
            title="Incorrect!"
            text="The correct answer was: "
            correctAnswer={questionData.correctAnswer}
          />
        ))}
    </Box>
  );
};

export default AnswerResultAlert;
