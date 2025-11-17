import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { QuizQuestion, QuizResult } from "../../store";

interface useQuizProps {
  results: QuizResult[];
  activeStep: number;
  questionData: QuizQuestion;
  handleSetResults: (
    questionData: QuizQuestion,
    selectedAnswer: string,
    pickedAnswerIndex: number
  ) => void;
}

const useQuiz = ({
  results,
  activeStep,
  questionData,
  handleSetResults,
}: useQuizProps) => {
  const prevSelectedAnswerIndex = useMemo(
    () =>
      // Quiz will be rerendered when the user moves to the next/previous question
      // so we need set the selected answer to the value saved in results (if it exists)
      results[activeStep].pickedAnswerIndex === -1
        ? -1
        : results[activeStep].pickedAnswerIndex,
    [activeStep, results]
  );

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(
    prevSelectedAnswerIndex
  );

  const sortedAnswers = useMemo(
    // Sort answers alphabetically ('shuffling' them)
    () => [questionData.correctAnswer, ...questionData.incorrectAnswers].sort(),
    [questionData]
  );

  const handleSelectedAnswerIndex = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const answerIndex = Number(e.target.value);
      setSelectedAnswerIndex(answerIndex);
      handleSetResults(questionData, e.target.name, answerIndex);
    },
    [handleSetResults, questionData]
  );

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    setSelectedAnswerIndex(prevSelectedAnswerIndex);
  }, [activeStep, prevSelectedAnswerIndex]);
  return {
    selectedAnswerIndex,
    handleSelectedAnswerIndex,
    sortedAnswers,
  };
};

export default useQuiz;
