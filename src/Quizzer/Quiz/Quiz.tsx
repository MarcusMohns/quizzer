import Box from "@mui/material/Box";
import { useState, useEffect, useCallback, useMemo } from "react";
import tags from "../../store.tsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./components/AnswerResultAlert.tsx";
import CategoryImage from "./components/CategoryImage.tsx";
import Tags from "./components/Tags.tsx";
import Answers from "./components/Answers.tsx";
import Question from "./components/Question.tsx";
import QuizTimer from "./components/quizTimer/QuizTimer.tsx";
import { QuizQuestion, QuizResult } from "../../store.tsx";

interface QuizProps {
  questionData: QuizQuestion;
  handleSetResults: (
    questionData: QuizQuestion,
    selectedAnswer: string,
    pickedAnswerIndex: number
  ) => void;
  results: QuizResult[];
  activeStep: number;
  timeLimit: { minutes: number; seconds: number };
  quizState: {
    started: boolean;
    completed: boolean;
  };
  handleSetQuizState: (newState: {
    started: boolean;
    completed: boolean;
  }) => void;
  completeQuiz: () => void;
  allQuestionsAnswered: boolean;
}

const Quiz = ({
  questionData,
  handleSetResults,
  results,
  activeStep,
  timeLimit,
  quizState,
  handleSetQuizState,
}: QuizProps) => {
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

  useEffect(() => {
    scrollTo({ top: 170, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Fade in={true} appear={true} timeout={1500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 2, md: 4 },
          borderRadius: "10px",
          px: { sm: "5%", lg: "20%" },
          width: "100%",
        }}
      >
        <CategoryImage
          image={tags[questionData.category].image}
          title={tags[questionData.category].title}
        />
        <Question questionData={questionData} activeStep={activeStep} />
        <QuizTimer
          timeLimit={timeLimit}
          quizState={quizState}
          handleSetQuizState={handleSetQuizState}
        />
        <Tags questionData={questionData} />
        <Answers
          selectedAnswerIndex={selectedAnswerIndex}
          handleSelectedAnswerIndex={handleSelectedAnswerIndex}
          sortedAnswers={sortedAnswers}
          questionData={questionData}
          activeStep={activeStep}
          results={results}
          correctlyAnswered={results[activeStep].correctlyAnswered}
          quizState={quizState}
        />
        <AnswerResultAlert
          correctlyAnswered={results[activeStep].correctlyAnswered}
          alertShown={results[activeStep].selectedAnswer !== "Not Answered"}
          questionData={questionData}
        />
      </Box>
    </Fade>
  );
};

export default Quiz;
