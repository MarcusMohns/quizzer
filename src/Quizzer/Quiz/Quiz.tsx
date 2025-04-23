import Box from "@mui/material/Box";
import { useState, useEffect, useCallback, useMemo } from "react";
import tags from "../../store.tsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./Components/AnswerResultAlert.tsx";
import CategoryImage from "./Components/CategoryImage.tsx";
import Tags from "./Components/Tags.tsx";
import Answers from "./Components/Answers.tsx";
import Question from "./Components/Question.tsx";
import QuizTimer from "./Components/QuizTimer/QuizTimer.tsx";
import { QuizQuestion } from "../../store.tsx";
interface QuizProps {
  questionData: QuizQuestion;
  handleSetResults: (
    questionData: QuizQuestion,
    selectedAnswer: string,
    pickedAnswerIndex: number
  ) => void;
  results: { [k: string]: string | boolean };
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
  const prevSelectedAnswer = useMemo(
    () =>
      // Quiz will be rerendered when the user moves to the next/previous question
      // so we need set the selected answer to the value saved in results (if it exists)
      results[activeStep] === "Not Answered"
        ? "Not Answered"
        : Object.keys(results[activeStep])[0],
    [activeStep, results]
  );

  const [selectedAnswer, setSelectedAnswer] = useState(prevSelectedAnswer);
  const sortedAnswers = [
    // Sort answers alphabetically ('shuffling' them)
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ].sort();

  // const handleSelectedAnswer = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSelectedAnswer(e.target.value);
  //     handleSetResults({
  //       ...results,
  //       [activeStep]:
  //         // Update the results at the activeStep
  //         e.target.name === questionData.correctAnswer
  //           ? { [e.target.value]: true }
  //           : { [e.target.value]: false },
  //     });
  //   },
  //   [activeStep, questionData.correctAnswer, handleSetResults, results]
  // );

  const handleSelectedAnswer = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedAnswer(e.target.value);
      handleSetResults(questionData, e.target.name, Number(e.target.value));
    },
    [handleSetResults, questionData]
  );

  // Check if the currently selected answer is correct
  const correctlyAnswered =
    results[activeStep][
      selectedAnswer as keyof (typeof results)[typeof activeStep]
    ]; // check if this is boolean

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    setSelectedAnswer(prevSelectedAnswer);
  }, [activeStep, prevSelectedAnswer]);

  useEffect(() => {
    scrollTo({ top: 134, left: 0, behavior: "smooth" });
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
          selectedAnswer={selectedAnswer}
          handleSelectedAnswer={handleSelectedAnswer}
          sortedAnswers={sortedAnswers}
          questionData={questionData}
          activeStep={activeStep}
          results={results}
          correctlyAnswered={Boolean(correctlyAnswered)}
          quizState={quizState}
        />
        <AnswerResultAlert
          correctlyAnswered={Boolean(correctlyAnswered)}
          alertShown={results[activeStep] !== "Not Answered"}
          questionData={questionData}
        />
      </Box>
    </Fade>
  );
};

export default Quiz;
