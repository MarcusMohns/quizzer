import { useState } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import QuizControls from "./QuizControls";
import QuizQuestion from "./QuizQuestion.jsx";
import PropTypes from "prop-types";

const Quizzer = ({ quizData }) => {
  Quizzer.propTypes = {
    quizData: PropTypes.array.isRequired,
  };

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

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
      <QuizQuestion questionData={quizData[activeStep]} />
      <QuizControls
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completed={completed}
        setCompleted={setCompleted}
        steps={quizData}
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
