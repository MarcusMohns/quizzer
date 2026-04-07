import List from "@mui/material/List";
import Box from "@mui/material/Box";
import confetti from "canvas-confetti";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import tags from "../../store";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
import { useEffect, useMemo } from "react";
import { QuizResult } from "../../store";
import ResultCard from "./ResultCard";
import { Paper, alpha } from "@mui/material";

interface ResultsProps {
  results: QuizResult[];
  timeLimit: { minutes: number; seconds: number };
}

const Results = ({ results, timeLimit }: ResultsProps) => {
  const { totalQuestions, correctAnswers, categories } = useMemo(() => {
    return {
      totalQuestions: results.length,
      correctAnswers: results.reduce(
        (count, result) => count + (result.correctlyAnswered ? 1 : 0),
        0,
      ),
      categories: Array.from(new Set(results.map((q) => q.category))),
    };
  }, [results]);

  const scorePercentage = useMemo(
    () => (correctAnswers / totalQuestions) * 100,
    [correctAnswers, totalQuestions],
  );

  const getFeedback = () => {
    if (scorePercentage === 100)
      return {
        title: "Perfect Score! 🏆",
        message: "Absolute mastery! You didn't miss a single thing.",
        color: "success.main",
      };
    if (scorePercentage >= 80)
      return {
        title: "Outstanding! 🌟",
        message: "Excellent work! You have a great handle on these topics.",
        color: "primary.main",
      };
    if (scorePercentage >= 50)
      return {
        title: "Well Done! 👍",
        message: "Solid effort! A few more rounds and you'll be an expert.",
        color: "warning.main",
      };
    return {
      title: "Nice try! 📚",
      message: "Every mistake is a lesson. Try again to boost your score!",
      color: "text.secondary",
    };
  };

  const feedback = useMemo(() => getFeedback(), [scorePercentage]);

  useEffect(() => {
    if (scorePercentage >= 80) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 2000,
      });
    }
  }, [correctAnswers, totalQuestions]);

  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.8),
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: 5,
        pb: 5,
        boxShadow: (theme) =>
          `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
        border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Zoom in={true} appear={true} timeout={300}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 900,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "3rem", md: "4.5rem" },
              mb: 1,
            }}
          >
            {scorePercentage.toFixed(0)}%
          </Typography>
          <Typography variant="h5" fontWeight="700" color="text.primary">
            {feedback.title}
          </Typography>
        </Box>
      </Zoom>

      <Grow in={true} appear={true} timeout={900}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ color: "text.primary", fontWeight: 500 }}
          >
            You got {correctAnswers} out of {totalQuestions} questions right! 🎈
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontStyle: "italic", mt: 0.5 }}
          >
            {feedback.message}
          </Typography>
        </Box>
      </Grow>

      <Grow
        in={true}
        appear={true}
        timeout={900}
        style={{ transitionDelay: "300ms" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            mb: 4,
          }}
        >
          <Chip
            icon={<span>🕰️</span>}
            label={`Time Limit: ${timeLimit.minutes}m ${timeLimit.seconds}s`}
            size="small"
            sx={{ fontWeight: "bold", color: "text.secondary" }}
          />
        </Box>
      </Grow>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: { xs: "center" },
          mb: 4,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            variant="filled"
            label={tags[category].title}
            icon={tags[category].icon}
            sx={{
              width: "min-content",
              bgcolor: (theme) => alpha(theme.palette.secondary.dark, 0.4),
              fontWeight: "bold",
              border: "none",
            }}
          />
        ))}
      </Stack>
      <Box sx={{ width: "100%" }}>
        <List disablePadding>
          {results.map((result, index) => (
            <ResultCard key={index} index={index} result={result} />
          ))}
        </List>
      </Box>
    </Paper>
  );
};
export default Results;
