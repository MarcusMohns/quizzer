import React, { useEffect } from "react";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import millisToMinutesAndSeconds from "../../../Utils/millisToMinutesAndSeconds";
import minutesAndSecondsToMillis from "../../../Utils/minutesAndSecondsToMillis";

function LinearProgressWithLabel(props) {
  const color =
    props.value > 50 ? "success" : props.value > 25 ? "warning" : "error";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "80%",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          color={color}
          variant="determinate"
          {...props}
          aria-label="progress-bar"
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body1" color={color} aria-label="timer">
          {millisToMinutesAndSeconds(props.timer)}
        </Typography>
      </Box>
    </Box>
  );
}

const QuizTimer = ({ timeLimit, quizState, setQuizState }) => {
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
        return prevTimer - 250;
      }
    });
  };

  useEffect(() => {
    interval = setInterval(updateTimer, 250);
    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Every time timer is updated, update the progress(0-100 value) - If timer is 0, set completed to true but wait 0.5s so the user can see the bar reach 0 first
    setProgress(() => (timer / timeLimitInMillis) * 100);
    timer <= 0 &&
      setTimeout(() => setQuizState({ ...quizState, completed: true }), 500);
  }, [timer]);

  return !quizState.completed ? (
    <LinearProgressWithLabel value={progress} timer={timer} />
  ) : (
    <LinearProgressWithLabel value={0} timer={0} />
  );
};
export default QuizTimer;
