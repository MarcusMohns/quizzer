import { useState } from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import QuizControls from "./QuizControls";
import QuizQuestion from "./QuizQuestion.jsx";

const Quizzer = () => {
  // add quizData
  // const [step, setStep] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const quizData = [
    {
      category: "history",
      id: "622a1c3c7cc59eab6f951ae9",
      correctAnswer: "1066",
      incorrectAnswers: ["1166", "1266", "1366"],
      question: {
        text: "In Which Year Did The Battle Of Hastings Take Place?",
      },
      tags: ["battles", "uk", "history"],
      type: "text_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
  ];

  // Sort array alphabetically

  // Shuffle the questions so the correct answer isn't always the last alternative.

  // Modify quizData so it contains correct answers etc and add it to a state ... Keep answers in a seperate state. ok

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
