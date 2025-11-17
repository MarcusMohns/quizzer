import { useState, useEffect } from "react";
import { minutesAndSecondsToMillis } from "./store";
interface useTimerProps {
  timeLimit: { minutes: number; seconds: number };
  quizState: {
    started: boolean;
    completed: boolean;
  };
  handleSetQuizState: (newState: {
    started: boolean;
    completed: boolean;
  }) => void;
}

export const useTimer = ({
  timeLimit,
  handleSetQuizState,
  quizState,
}: useTimerProps) => {
  const timeLimitInMillis = minutesAndSecondsToMillis(
    timeLimit.minutes,
    timeLimit.seconds
  );
  const INTERVAL_MILLIS = 1000;

  const [timer, setTimer] = useState(timeLimitInMillis);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (timer === 0) {
      handleSetQuizState({ ...quizState, completed: true });
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - INTERVAL_MILLIS);
    }, INTERVAL_MILLIS);

    if (quizState.completed) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, timeLimitInMillis, handleSetQuizState, quizState]);

  useEffect(() => {
    // Update Progress every time timer changes
    setProgress((timer / timeLimitInMillis) * 100);
  }, [timer, timeLimitInMillis]);

  return { timer, progress };
};

export default useTimer;
