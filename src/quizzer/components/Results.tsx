import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import tags from "../../store";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
import { useEffect } from "react";
import { QuizResult } from "../../store";
import ResultCard from "./ResultCard";
import { Paper, alpha } from "@mui/material";

interface ResultsProps {
  results: QuizResult[];
  timeLimit: { minutes: number; seconds: number };
}

const Results = ({ results, timeLimit }: ResultsProps) => {
  const totalQuestions = results.length;
  const correctAnswers = results.reduce(
    (count, result) => count + (result.correctlyAnswered === true ? 1 : 0),
    0,
  );
  const categories = Array.from(
    new Set(results.map((question) => question.category)),
  );

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
            {((correctAnswers / totalQuestions) * 100).toFixed(0)}%
          </Typography>
          <Typography variant="h5" fontWeight="700" color="text.primary">
            Quiz Complete! 🎊
          </Typography>
        </Box>
      </Zoom>

      <Grow in={true} appear={true} timeout={900}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ textAlign: "center", color: "text.primary", fontWeight: 500 }}
        >
          You got {correctAnswers} out of {totalQuestions} questions right! 🎈
        </Typography>
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
