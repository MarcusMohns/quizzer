import LabledProgressBar from "./components/LabledProgressBar.tsx";
import useTimer from "./useTimer.ts";

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
  const { timer, progress } = useTimer({
    timeLimit,
    handleSetQuizState,
    quizState,
  });

  return !quizState.completed ? (
    <LabledProgressBar value={progress} timer={timer} />
  ) : (
    <LabledProgressBar value={0} timer={0} />
  );
};
export default QuizTimer;
