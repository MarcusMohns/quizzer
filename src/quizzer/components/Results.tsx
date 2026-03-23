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

interface ResultsProps {
  results: QuizResult[];
  timeLimit: { minutes: number; seconds: number };
}

const Results = ({ results, timeLimit }: ResultsProps) => {
  const totalQuestions = results.length;
  const correctAnswers = Object.values(results).reduce(
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
    <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", px: 2, pb: 5 }}>
      <Zoom in={true} appear={true} timeout={300}>
        <Typography
          id=""
          variant="h4"
          component="h2"
          sx={{ mt: 5, textAlign: "center", fontWeight: "bold" }}
          color="info"
        >
          {((correctAnswers / totalQuestions) * 100).toFixed(2)}% Correct! 🎊
        </Typography>
      </Zoom>
      <Grow in={true} appear={true} timeout={900}>
        <Typography
          id=""
          variant="h6"
          component="h3"
          sx={{ mt: 1, textAlign: "center", color: "text.secondary" }}
        >
          {correctAnswers} correct out of {totalQuestions} total questions! 🎈
        </Typography>
      </Grow>
      <Grow
        in={true}
        appear={true}
        timeout={900}
        style={{ transitionDelay: "300ms" }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", p: 1, mb: 4, fontStyle: "italic" }}
          color="text.disabled"
        >
          The time limit was {timeLimit.minutes} minute and {timeLimit.seconds}{" "}
          seconds 🕰️
        </Typography>
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
            variant="outlined"
            label={tags[category].title}
            icon={tags[category].icon}
            sx={{ width: "min-content" }}
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
    </Box>
  );
};
export default Results;
