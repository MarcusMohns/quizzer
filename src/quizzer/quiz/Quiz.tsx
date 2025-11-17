import Box from "@mui/material/Box";
import { useEffect } from "react";
import tags from "../../store.tsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./components/AnswerResultAlert.tsx";
import CategoryImage from "./components/CategoryImage.tsx";
import Tags from "./components/Tags.tsx";
import Answers from "./components/Answers.tsx";
import Question from "./components/Question.tsx";
import QuizTimer from "./components/quizTimer/QuizTimer.tsx";
import { QuizQuestion, QuizResult } from "../../store.tsx";
import useQuiz from "./useQuiz.ts";

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
  const { selectedAnswerIndex, handleSelectedAnswerIndex, sortedAnswers } =
    useQuiz({
      results,
      activeStep,
      questionData,
      handleSetResults,
    });

  useEffect(() => {
    // Scroll to the Quiz
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
