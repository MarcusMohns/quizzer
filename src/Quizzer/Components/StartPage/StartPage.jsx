import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuizInfo from "./Components/QuizInfo.jsx";
import SelectTimer from "./Components/SelectTimer.jsx";
import Fade from "@mui/material/Fade";

const StartPage = ({
  timeLimit,
  setTimeLimit,
  setQuizState,
  quizData,
  quizState,
  resetQuizData,
}) => {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "600px",
          height: "100%",
          width: "100%",
          py: 5,
          px: { sm: "5%", lg: "20%" },
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h3" sx={{ textAlign: "center" }}>
          About to start the quiz!
          {quizData.length} questions!
        </Typography>
        <SelectTimer timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
        <QuizInfo quizData={quizData} />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={resetQuizData}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => setQuizState({ ...quizState, started: true })}
            disabled={timeLimit.minutes === 0 && timeLimit.seconds === 0}
          >
            Start Quiz!
          </Button>
        </Stack>
      </Box>
    </Fade>
  );
};

export default StartPage;
