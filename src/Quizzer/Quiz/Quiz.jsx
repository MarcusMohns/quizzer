import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import tags from "../../Utils/tags.jsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./Components/AnswerResultAlert.jsx";
import CategoryImage from "./Components/CategoryImage.jsx";
import Tags from "./Components/Tags.jsx";
import Answers from "./Components/Answers.jsx";
import Question from "./Components/Question.jsx";

const Quiz = ({
  questionData,
  setResults,
  results,
  activeStep,
  setCompleted,
}) => {
  // Get the previous selected answer if it exists
  // If it doesn't, default to ""
  const prevSelectedAnswer = results[activeStep]
    ? Object.keys(results[activeStep]).find(
        (key) => results[activeStep][key] !== undefined
      ) || ""
    : "";

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
  const correctlyAnswered =
    results[activeStep] !== undefined &&
    results[activeStep][selectedAnswer] === true;

  const handleComplete = () => {
    setCompleted((prevCompleted) => ({ ...prevCompleted, [activeStep]: true }));
  };

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
        <Tags questionData={questionData} />
        <Answers
          selectedAnswer={selectedAnswer}
          handleSelectedAnswer={handleSelectedAnswer}
          sortedAnswers={sortedAnswers}
          questionData={questionData}
          handleComplete={handleComplete}
          activeStep={activeStep}
          results={results}
          correctlyAnswered={correctlyAnswered}
        />
        <AnswerResultAlert
          alertShown={results[activeStep] !== undefined}
          correctlyAnswered={correctlyAnswered}
          questionData={questionData}
        />
      </Box>
    </Fade>
  );
};

export default Quiz;
