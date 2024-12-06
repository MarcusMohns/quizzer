import { useState } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import QuizControls from "./QuizControls";
import QuizQuestion from "./QuizQuestion.jsx";
import PropTypes from "prop-types";
import Results from "./Results.jsx";

const Quizzer = ({ quizData }) => {
  Quizzer.propTypes = {
    quizData: PropTypes.array.isRequired,
  };

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [results, setResults] = useState({});

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
      {activeStep === quizData.length ? (
        <Results results={results} quizData={quizData} />
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
