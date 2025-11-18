import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuizInfo from "./components/QuizInfo.tsx";
import SelectTimer from "./components/SelectTimer.tsx";
import Fade from "@mui/material/Fade";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { QuizState } from "../../../store.tsx";

interface StartPageProps {
  timeLimit: { minutes: number; seconds: number };
  handleSetTimeLimit: (timeLimit: { minutes: number; seconds: number }) => void;
  handleSetQuizState: (newState: {
    started: boolean;
    completed: boolean;
  }) => void;
  quizData: QuizState;
  quizState: {
    started: boolean;
    completed: boolean;
  };
  resetQuizData: () => void;
}

const StartPage = ({
  timeLimit,
  handleSetTimeLimit,
  handleSetQuizState,
  quizData,
  quizState,
  resetQuizData,
}: StartPageProps) => {
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.7rem", sm: "2rem" },
            p: 2,
          }}
        >
          Your quiz is ready🎺
        </Typography>
        <QuizInfo quizData={quizData} />
        <SelectTimer
          timeLimit={timeLimit}
          handleSetTimeLimit={handleSetTimeLimit}
        />

        <Box>
          <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
            <Button
              variant="outlined"
              onClick={resetQuizData}
              startIcon={<NavigateBeforeIcon />}
              color="info"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                handleSetQuizState({ ...quizState, started: true })
              }
              disabled={timeLimit.minutes === 0 && timeLimit.seconds === 0}
              size="large"
              sx={{ width: "200px", color: "primary.contrastText" }}
              color="success"
              endIcon={"💥"}
            >
              Start Quiz!
            </Button>
          </Stack>
        </Box>
      </Box>
    </Fade>
  );
};

export default StartPage;
