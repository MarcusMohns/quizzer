import React from "react";
import Zoom from "@mui/material/Zoom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import AlertTitle from "@mui/material/AlertTitle";
import { Typography } from "@mui/material";

const AnswerResultAlert = ({ correctlyAnswered, questionData, alertShown }) => {
  return (
    <Box
      sx={{
        minHeight: { xs: "150px", sm: "100px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {alertShown &&
        (correctlyAnswered ? (
          <Zoom in={true}>
            <Alert
              severity="success"
              variant="outlined"
              sx={{ textAlign: "center", m: 2 }}
            >
              <AlertTitle>
                Correct! The answer is:{" "}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    ml: 0.2,
                    color: "primary.main",
                  }}
                >
                  {questionData.correctAnswer}
                </Typography>
              </AlertTitle>
            </Alert>
          </Zoom>
        ) : (
          <Zoom in={true}>
            <Alert
              severity="error"
              variant="outlined"
              sx={{ textAlign: "center", m: 2, fontWeight: "bold" }}
            >
              <AlertTitle>
                Incorrect! The answer to the question is:{" "}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    ml: 0.2,
                    color: "primary.main",
                  }}
                >
                  {questionData.correctAnswer}
                </Typography>
              </AlertTitle>
            </Alert>
          </Zoom>
        ))}
    </Box>
  );
};

export default AnswerResultAlert;
