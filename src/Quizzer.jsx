import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import QuizControls from "./QuizControls";
import QuizQuestion from "./QuizQuestion.jsx";
import PropTypes from "prop-types";
import Results from "./Results.jsx";
import ResultsModal from "./ResultsModal.jsx";

const Quizzer = ({ quizData }) => {
  Quizzer.propTypes = {
    quizData: PropTypes.array.isRequired,
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

  useEffect(() => {
    console.log(quizData);
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
        p: 0,
        borderRadius: "7px",
      }}
    >
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
        <QuizQuestion
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
    </Box>
  );
};

export default Quizzer;
