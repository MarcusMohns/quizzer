import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import minutesAndSecondsToMillis from "../../../../Utils/minutesAndSecondsToMillis";
import LabledProgressBar from "./Components/LabledProgressBar";

const QuizTimer = ({ timeLimit, quizState, setQuizState }) => {
  const timeLimitInMillis = minutesAndSecondsToMillis(timeLimit);
  const [timer, setTimer] = useState(timeLimitInMillis);
  const [progress, setProgress] = useState(100);

  let interval;
  // How often timer is updated in ms
  const TIMER_INTERVAL = 1000;

  const updateTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer <= 0) {
        clearInterval(interval);
        return 0;
      } else {
        return prevTimer - TIMER_INTERVAL;
      }
    });
  };

  useEffect(() => {
    interval = setInterval(updateTimer, TIMER_INTERVAL);
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
    <LabledProgressBar value={progress} timer={timer} />
  ) : (
    <LabledProgressBar value={0} timer={0} />
  );
};
export default QuizTimer;
