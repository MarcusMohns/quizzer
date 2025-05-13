import { useState, useEffect } from "react";
import { minutesAndSecondsToMillis } from "./store.tsx";
import LabledProgressBar from "./components/LabledProgressBar.tsx";

interface QuizTimerProps {
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

const QuizTimer = ({
  timeLimit,
  quizState,
  handleSetQuizState,
}: QuizTimerProps) => {
  const timeLimitInMillis = minutesAndSecondsToMillis(
    timeLimit.minutes,
    timeLimit.seconds
  );

  const useTimer = (timeLimitInMillis: number) => {
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
    }, [timer, timeLimitInMillis]);

    useEffect(() => {
      // Update Progress every time timer changes
      setProgress((timer / timeLimitInMillis) * 100);
    }, [timer, timeLimitInMillis]);

    return { timer, progress };
  };

  const { timer, progress } = useTimer(timeLimitInMillis);

  return !quizState.completed ? (
    <LabledProgressBar value={progress} timer={timer} />
  ) : (
    <LabledProgressBar value={0} timer={0} />
  );
};
export default QuizTimer;
