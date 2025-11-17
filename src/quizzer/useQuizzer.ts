import { useCallback, useEffect, useMemo, useState } from "react";
import { QuizState, QuizQuestion, QuizResult } from "../store.tsx";

interface useQuizzerProps {
  quizData: QuizState;
  handleSetQuizData: (data: QuizState | null) => void;
}

const useQuizzer = ({ quizData, handleSetQuizData }: useQuizzerProps) => {
  const [quizState, setQuizState] = useState({
    started: false,
    completed: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  // Create an object with keys as question numbers and values as "Not Answered"
  const initialResults = useMemo(
    () =>
      quizData.map((question, idx) => ({
        selectedAnswer: "Not Answered",
        correctlyAnswered: false,
        pickedAnswerIndex: -1,
        correctAnswer: question.correctAnswer,
        category: question.category,
        questionText: question.question.text,
        questionNum: idx + 1,
      })),
    [quizData]
  );

  const [results, setResults] = useState<QuizResult[]>(initialResults);

  const handleSetQuizState = useCallback(
    (newState: { started: boolean; completed: boolean }) => {
      setQuizState(newState);
    },
    [setQuizState]
  );

  const handleSetResults = useCallback(
    (
      questionData: QuizQuestion,
      selectedAnswer: string,
      pickedAnswerIndex: number
    ) => {
      setResults((prevResults) => {
        const newResults = [...prevResults];
        newResults[activeStep] = {
          selectedAnswer: selectedAnswer,
          pickedAnswerIndex: pickedAnswerIndex,
          correctlyAnswered: selectedAnswer === questionData.correctAnswer,
          correctAnswer: questionData.correctAnswer,
          questionNum: activeStep + 1,
          category: questionData.category,
          questionText: questionData.question.text,
        };
        return newResults;
      });
    },
    [activeStep, setResults]
  );

  const handleSetTimeLimit = useCallback(
    (timeLimit: { minutes: number; seconds: number }) => {
      setTimeLimit(timeLimit);
    },
    [setTimeLimit]
  );

  const handleSetActiveStep = useCallback(
    (step: number) => setActiveStep(step),
    [setActiveStep]
  );

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setQuizState({ started: false, completed: false });
    setResults(initialResults);
  }, [initialResults, setActiveStep, setQuizState, setResults]);

  const resetQuizData = useCallback(() => {
    handleSetQuizData(null);
  }, [handleSetQuizData]);

  const completeQuiz = useCallback(() => {
    setQuizState((prevQuizState) => ({ ...prevQuizState, completed: true }));
  }, [setQuizState]);

  // Check if all questions are answered
  const allQuestionsAnswered = useMemo(
    () =>
      results.filter((result) => result.selectedAnswer === "Not Answered")
        .length === 0,
    [results]
  );

  useEffect(() => {
    // Reset Quiz when quizData changes
    handleReset();
  }, [quizData, handleReset]);

  useEffect(() => {
    // if all questions are answered complete the quiz
    if (allQuestionsAnswered) {
      completeQuiz();
    }
  }, [results, allQuestionsAnswered, completeQuiz]);

  return {
    quizData,
    handleSetQuizData,
    quizState,
    handleSetQuizState,
    activeStep,
    handleSetActiveStep,
    results,
    handleSetResults,
    timeLimit,
    handleSetTimeLimit,
    handleReset,
    allQuestionsAnswered,
    completeQuiz,
    resetQuizData,
  };
};

export default useQuizzer;
