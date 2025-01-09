import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import QuizControls from "./QuizControls";
import Quiz from "./Quiz/Quiz.jsx";
import PropTypes from "prop-types";
import Results from "./Results.jsx";
import ResultsModal from "./ResultsModal.jsx";
import Button from "@mui/material/Button";
import { memo } from "react";

const Quizzer = ({ quizData, setQuizData }) => {
  Quizzer.propTypes = {
    quizData: PropTypes.array.isRequired,
    setQuizData: PropTypes.func.isRequired,
  };

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [results, setResults] = useState({});

  const allStepsCompleted = () => {
    return Object.keys(completed).length === quizData.length;
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setResults({});
  };

  const handleBackClick = () => {
    setQuizData([]);
  };

  useEffect(() => {
    handleReset();
  }, [quizData]);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        height: "100%",
        alignItems: "center",
        p: 0,
        borderRadius: "7px",
      }}
    >
      <Button
        variant="outlined"
        onClick={handleBackClick}
        size="small"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
        color="secondary"
      >
        Back
      </Button>
      <>
        {allStepsCompleted() && (
          <ResultsModal
            setActiveStep={setActiveStep}
            results={results}
            handleReset={handleReset}
            totalQuestions={quizData.length}
          />
        )}
        {activeStep === quizData.length ? (
          <Results
            results={results}
            quizData={quizData}
            totalQuestions={quizData.length}
          />
        ) : (
          <Quiz
            questionData={quizData[activeStep]}
            setResults={setResults}
            activeStep={activeStep}
            results={results}
            setCompleted={setCompleted}
          />
        )}
        <QuizControls
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          completed={completed}
          setCompleted={setCompleted}
          steps={quizData}
          setResults={setResults}
          results={results}
          handleReset={handleReset}
        />
        <QuizStepper
          steps={quizData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          completed={completed}
        />
      </>
    </Box>
  );
};

export default memo(Quizzer);
