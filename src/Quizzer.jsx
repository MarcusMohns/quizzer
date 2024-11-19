import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import QuizStepper from "./QuizStepper";
import { useState } from "react";

const Quizzer = () => {
  const [quiz, setQuiz] = useState([]);
  const [step, setStep] = useState(0);

  let data =
    "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

  const fetchQuiz = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
      );
      const data = await response.json();
      setQuiz(data.results);
    } catch (error) {
      console.log("error fetching data...", error);
    }
  };
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <QuizStepper step={step} setStep={setStep} />
      <Button onClick={fetchQuiz}>Clcik</Button>
      {quiz.map((obj) => obj.question)}
    </Box>
  );
};

export default Quizzer;
