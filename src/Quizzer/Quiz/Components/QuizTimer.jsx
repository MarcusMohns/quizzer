import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import millisToMinutesAndSeconds from "../../../Utils/millisToMinutesAndSeconds";
import minutesAndSecondsToMillis from "../../../Utils/minutesAndSecondsToMillis";

const CircularProgressWithLabel = ({ value, timer }) => (
  <Box sx={{ position: "relative", display: "inline-flex", p: 3 }}>
    <CircularProgress
      variant="determinate"
      value={value}
      color="secondary"
      size={70}
    />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="caption" component="div" sx={{ fontSize: "1.2rem" }}>
        {millisToMinutesAndSeconds(timer)}
      </Typography>
    </Box>
  </Box>
);

const QuizTimer = ({ timeLimit }) => {
  const timeLimitInMillis = minutesAndSecondsToMillis(timeLimit);
  const [timer, setTimer] = useState(timeLimitInMillis);
  const [progress, setProgress] = useState(100);
  let interval;

  const updateTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer <= 0) {
        clearInterval(interval);
        return 0;
      } else {
        return prevTimer - 1000;
      }
    });
  };

  useEffect(() => {
    interval = setInterval(updateTimer, 1000);
    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setProgress(() => (timer / timeLimitInMillis) * 100);
  }, [timer]);

  return <CircularProgressWithLabel value={progress} timer={timer} />;
};
export default QuizTimer;
