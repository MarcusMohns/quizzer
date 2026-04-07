import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import tags from "../../store.tsx";
import Fade from "@mui/material/Fade";
import ResultAlert from "./components/ResultAlert.tsx";
import CategoryImage from "./components/CategoryImage.tsx";
import Tags from "./components/Tags.tsx";
import Answers from "./components/Answers.tsx";
import Question from "./components/Question.tsx";
import QuizTimer from "./components/quiz-timer/QuizTimer.tsx";
import { QuizQuestion, QuizResult } from "../../store.tsx";
import useQuiz from "./useQuiz.ts";
import AnimatedSquares from "../../css-animations/animated-squares/AnimatedSquares.tsx";
import { Paper } from "@mui/material";
interface QuizProps {
  questionData: QuizQuestion;
  handleSetResults: (
    questionData: QuizQuestion,
    selectedAnswer: string,
    pickedAnswerIndex: number,
  ) => void;
  results: QuizResult[];
  activeStep: number;
  timeLimit: { minutes: number; seconds: number };
  handleReset: () => void;
  quizState: {
    started: boolean;
    completed: boolean;
  };
  handleSetQuizState: (newState: {
    started: boolean;
    completed: boolean;
  }) => void;
  handleSetActiveStep: (step: number) => void;
}

const Quiz = ({
  questionData,
  handleSetResults,
  results,
  activeStep,
  timeLimit,
  quizState,
  handleReset,
  handleSetQuizState,
  handleSetActiveStep,
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
    scrollTo({ top: 138, left: 0, behavior: "smooth" });
  }, []);

  const handleNextQuestion = () => {
    const isLastStep = activeStep === results.length - 1;
    const allQuestionsAnswered = results.every(
      (result) => result.selectedAnswer !== "Not Answered",
    );

    if (isLastStep && !allQuestionsAnswered && !quizState.completed) {
      handleSetActiveStep(
        results.findIndex((r) => r.selectedAnswer === "Not Answered"),
      );
    } else {
      handleSetActiveStep(activeStep + 1);
    }
  };

  const handleGoToResults = () => {
    const totalQuestions = results.length;
    handleSetActiveStep(totalQuestions);
  };

  const quizCompleted = quizState.completed;
  const quizStarted = quizState.started && !quizState.completed;
  return (
    <Fade in={true} appear={true} timeout={1500}>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "10px",
        }}
      >
        {quizStarted && <AnimatedSquares />}
        <Stack
          spacing={3}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1, width: "100%", p: 2 }}
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
          <ResultAlert
            correctlyAnswered={results[activeStep].correctlyAnswered}
            alertShown={results[activeStep].selectedAnswer !== "Not Answered"}
            questionData={questionData}
            handleReset={handleReset}
            handleNextQuestion={handleNextQuestion}
            handleGoToResults={handleGoToResults}
            quizCompleted={quizCompleted}
          />
        </Stack>
      </Paper>
    </Fade>
  );
};

export default Quiz;
