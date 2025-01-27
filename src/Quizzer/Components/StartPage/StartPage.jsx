import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuizInfo from "./Components/QuizInfo.jsx";
import SelectTimer from "./Components/SelectTimer.jsx";
import Fade from "@mui/material/Fade";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
          px: { sm: "5%", lg: "20%" },
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h3" sx={{ textAlign: "center" }}>
          Your quiz is ready🎺
        </Typography>
        <SelectTimer timeLimit={timeLimit} setTimeLimit={setTimeLimit} />

        <QuizInfo quizData={quizData} />
        <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
          <Button
            variant="outlined"
            onClick={resetQuizData}
            startIcon={<NavigateBeforeIcon />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => setQuizState({ ...quizState, started: true })}
            disabled={timeLimit.minutes === 0 && timeLimit.seconds === 0}
            size="large"
            color="altSuccess"
            sx={{ width: "200px" }}
            endIcon={"💥"}
          >
            Start Quiz!
          </Button>
        </Stack>
      </Box>
    </Fade>
  );
};

export default StartPage;
