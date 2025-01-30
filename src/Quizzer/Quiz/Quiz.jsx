import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import tags from "../../Utils/tags.jsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./Components/AnswerResultAlert.jsx";
import CategoryImage from "./Components/CategoryImage.jsx";
import Tags from "./Components/Tags.jsx";
import Answers from "./Components/Answers.jsx";
import Question from "./Components/Question.jsx";
import QuizTimer from "./Components/QuizTimer.jsx";

const Quiz = ({
  questionData,
  setResults,
  results,
  activeStep,
  timeLimit,
  quizState,
  setQuizState,
  completeQuiz,
  allQuestionsAnswered,
}) => {
  const prevSelectedAnswer =
    // Quiz will be rerendered when the user moves to the next/previous question
    // so we need set the selected answer to the value saved in results (if it exists)
    results[activeStep] === "Not Answered"
      ? "Not Answered"
      : Object.keys(results[activeStep])[0];
  const [selectedAnswer, setSelectedAnswer] = useState(prevSelectedAnswer);

  const sortedAnswers = [
    // Sort answers alphabetically (shuffling them)
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ].sort();

  const handleSelectedAnswer = (e) => {
    setSelectedAnswer(e.target.value);
    setResults((prevResults) => ({
      ...prevResults,
      [activeStep]:
        // Store selected answer: true if correct, false if incorrect
        e.target.name === questionData.correctAnswer
          ? { [e.target.value]: true }
          : { [e.target.value]: false },
    }));
  };

  // Check if the currently selected answer is correct
  const correctlyAnswered = results[activeStep][selectedAnswer];

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    setSelectedAnswer(prevSelectedAnswer);
  }, [activeStep, prevSelectedAnswer]);

  useEffect(() => {
    // if all questions are answered complete the quiz
    allQuestionsAnswered && completeQuiz();
  }, [results]);

  useEffect(() => {
    scrollTo({ top: 155, left: 0, behavior: "smooth" });
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
          title={[tags[questionData.category].title]}
        />
        <Question questionData={questionData} activeStep={activeStep} />
        <QuizTimer
          timeLimit={timeLimit}
          quizState={quizState}
          setQuizState={setQuizState}
        />
        <Tags questionData={questionData} />
        <Answers
          selectedAnswer={selectedAnswer}
          handleSelectedAnswer={handleSelectedAnswer}
          sortedAnswers={sortedAnswers}
          questionData={questionData}
          activeStep={activeStep}
          results={results}
          correctlyAnswered={correctlyAnswered}
          quizState={quizState}
        />
        <AnswerResultAlert
          alertShown={results[activeStep] !== "Not Answered"}
          correctlyAnswered={correctlyAnswered}
          questionData={questionData}
        />
      </Box>
    </Fade>
  );
};

export default Quiz;
