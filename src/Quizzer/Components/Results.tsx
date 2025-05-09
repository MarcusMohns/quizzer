import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import tags from "../../store";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useEffect } from "react";
import { QuizResult } from "../../store";

interface ResultsProps {
  results: QuizResult[];
  timeLimit: { minutes: number; seconds: number };
}

const Results = ({ results, timeLimit }: ResultsProps) => {
  const totalQuestions = results.length;
  const correctAnswers = Object.values(results).reduce(
    (count, result) => count + (result.correctlyAnswered === true ? 1 : 0),
    0
  );
  const categories = Array.from(
    new Set(results.map((question) => question.category))
  );

  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box>
      <Zoom in={true} appear={true} timeout={300}>
        <Typography
          id=""
          variant="h4"
          component="h2"
          sx={{ mt: 5, textAlign: "center" }}
        >
          {((correctAnswers / totalQuestions) * 100).toFixed(2)}% Correct! 🎊
        </Typography>
      </Zoom>
      <Grow in={true} appear={true} timeout={900}>
        <Typography
          id=""
          variant="h6"
          component="h3"
          sx={{ mt: 1, textAlign: "center" }}
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
        <Box sx={{ textAlign: "center", p: 1 }}>
          The time limit was {timeLimit.minutes} minute and {timeLimit.seconds}{" "}
          seconds 🕰️
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
          mt: 5,
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
      <Fade in={true} appear={true} timeout={700}>
        <List dense={true}>
          {results.map((result, index) =>
            result.selectedAnswer === "Not Answered" ? (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "info.contrastText",
                  m: 1,
                  boxShadow: 1,
                  width: "auto",
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.questionText}
                  secondary={`No answer was picked. The correct answer was: ${result.correctAnswer}`}
                />
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
              </ListItem>
            ) : result.correctlyAnswered ? (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "success.contrastText",
                  m: 1,
                  boxShadow: 1,
                  width: "auto",
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.questionText}
                  secondary={`Correct!  the answer was: ${result.correctAnswer}`}
                />
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
              </ListItem>
            ) : (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "error.contrastText",
                  m: 1,
                  boxShadow: 1,
                  width: "auto",
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.questionText}
                  secondary={`Incorrect - You picked ${result.selectedAnswer}, the correct answer was: ${result.correctAnswer}`}
                />
                <ListItemIcon>
                  <CancelOutlinedIcon />
                </ListItemIcon>
              </ListItem>
            )
          )}
        </List>
      </Fade>
    </Box>
  );
};
export default Results;
