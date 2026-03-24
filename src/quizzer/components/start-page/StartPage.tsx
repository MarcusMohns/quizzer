import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import QuizInfo from "./components/QuizInfo.tsx";
import SelectTimer from "./components/SelectTimer.tsx";
import Fade from "@mui/material/Fade";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
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
          height: "100%",
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: 4,
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight="800"
          sx={{
            textAlign: "center",
            mb: 3,
            background: (theme) =>
              `linear-gradient(45deg, ${
                theme.palette.mode === "dark"
                  ? theme.palette.warning.light
                  : theme.palette.primary.dark
              }, ${theme.palette.warning.dark})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your quiz is ready!
        </Typography>
        <QuizInfo quizData={quizData} />
        <Divider flexItem>
          <Typography variant="overline" color="text.secondary">
            Settings
          </Typography>
        </Divider>
        <SelectTimer
          timeLimit={timeLimit}
          handleSetTimeLimit={handleSetTimeLimit}
        />
        <Box sx={{ width: "100%", mt: 2 }}>
          <Stack
            spacing={3}
            direction="row"
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Button
              variant="outlined"
              onClick={resetQuizData}
              startIcon={<NavigateBeforeIcon />}
              color="info"
              sx={{ borderRadius: 2, px: 3 }}
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
              sx={{
                minWidth: "200px",
                borderRadius: 2,
                py: 1.5,
                fontWeight: "bold",
                boxShadow: 4,
              }}
              color="primary"
              endIcon={<RocketLaunchIcon />}
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
