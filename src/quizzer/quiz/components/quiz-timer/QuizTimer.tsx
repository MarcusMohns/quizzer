import LabledProgressBar from "./components/LabledProgressBar.tsx";
import useQuizTimer from "./useQuizTimer.ts";

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
  const { timer, progress } = useQuizTimer({
    timeLimit,
    handleSetQuizState,
    quizState,
  });

  return quizState.completed ? (
    <LabledProgressBar value={0} timer={0} />
  ) : (
    <LabledProgressBar value={progress} timer={timer} />
  );
};
export default QuizTimer;
