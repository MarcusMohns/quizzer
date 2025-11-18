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

export const useQuizTimer = ({
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
    if (quizState.completed) return;
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - INTERVAL_MILLIS);
    }, INTERVAL_MILLIS);

    return () => {
      clearInterval(intervalId);
    };
  }, [quizState.completed]);

  useEffect(() => {
    // Update Progress every time timer changes
    setProgress((timer / timeLimitInMillis) * 100);
  }, [timer, timeLimitInMillis]);

  useEffect(() => {
    if (timer === 0 && !quizState.completed) {
      // If timer is 0 and quiz is not completed
      handleSetQuizState({ started: true, completed: true });
      // Complete the quiz
    }
  }, [timer, handleSetQuizState, quizState]);

  return { timer, progress };
};

export default useQuizTimer;
