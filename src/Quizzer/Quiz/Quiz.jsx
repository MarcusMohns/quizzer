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
}) => {
  const prevSelectedAnswer =
    results[activeStep] === "Not Answered"
      ? "Not Answered"
      : Object.keys(results[activeStep])[0];
  const [selectedAnswer, setSelectedAnswer] = useState(prevSelectedAnswer);

  const sortedAnswers = [
    // Sort answers alphabetically
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ].sort();

  const handleSelectedAnswer = (e) => {
    setSelectedAnswer(e.target.value);
    setResults((prevResults) => ({
      ...prevResults,
      [activeStep]:
        e.target.name === questionData.correctAnswer
          ? { [e.target.value]: true }
          : { [e.target.value]: false },
    }));
  };

  // Check if the currently selected answer is correct
  const correctlyAnswered = results[activeStep][0];

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    setSelectedAnswer(prevSelectedAnswer);
  }, [activeStep, prevSelectedAnswer]);

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
        {!quizState.finished && (
          <QuizTimer
            timeLimit={timeLimit}
            quizState={quizState}
            setQuizState={setQuizState}
          />
        )}
        <Tags questionData={questionData} />
        <Answers
          selectedAnswer={selectedAnswer}
          handleSelectedAnswer={handleSelectedAnswer}
          sortedAnswers={sortedAnswers}
          questionData={questionData}
          activeStep={activeStep}
          results={results}
          correctlyAnswered={correctlyAnswered}
          setQuizState={setQuizState}
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
