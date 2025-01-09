import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import tags from "../../Utils/tags.jsx";
import Fade from "@mui/material/Fade";
import AnswerResultAlert from "./AnswerResultAlert.jsx";
import CategoryImage from "./CategoryImage.jsx";
import Tags from "./Tags.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

const Quiz = ({
  questionData,
  setResults,
  results,
  activeStep,
  setCompleted,
}) => {
  Quiz.propTypes = {
    questionData: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    setResults: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
    setCompleted: PropTypes.func.isRequired,
  };

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

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
    setResults((prevResults) => ({
      ...prevResults,
      [activeStep]:
        e.target.name === questionData.correctAnswer
          ? { [e.target.value]: true }
          : { [e.target.value]: false },
    }));
  };

  // Check if the selected answer is correct
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
          handleChange={handleChange}
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
