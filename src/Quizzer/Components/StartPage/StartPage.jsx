import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuizInfo from "./Components/QuizInfo.jsx";
import SelectTimer from "./Components/SelectTimer.jsx";

const StartPage = ({ timeLimit, setTimeLimit, setQuizStarted, quizData }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        height: "100%",
        width: "100%",
        alignItems: "center",
        p: 5,
      }}
    >
      <Typography variant="h5" component="h3">
        About to start the quiz!
        {quizData.length} questions!
      </Typography>
      <SelectTimer timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
      <QuizInfo quizData={quizData} />
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Back</Button>
        <Button variant="contained" onClick={() => setQuizStarted(true)}>
          Start Quiz!
        </Button>
      </Stack>
    </Box>
  );
};

export default StartPage;
