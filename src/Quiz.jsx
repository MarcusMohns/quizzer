import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

const letters = ["A", "B", "C", "D"];

const Quiz = ({ questionData }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 5 }}>
      <Box>{questionData.question}</Box>

      <Box>
        {[...questionData.incorrect_answers, questionData.correct_answer].map(
          (answer, index) => (
            <div>
              {letters[index]}) {answer}
            </div>
          )
        )}
      </Box>
    </Box>
  );
};

export default Quiz;
