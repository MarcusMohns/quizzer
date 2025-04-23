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
import { QuizState } from "../../store";

interface ResultsProps {
  results: { [k: string]: boolean | string };
  quizData: QuizState;
  totalQuestions: number;
  timeLimit: { minutes: number; seconds: number };
}

const Results = ({
  results,
  quizData,
  totalQuestions,
  timeLimit,
}: ResultsProps) => {
  // turn results object into an array of objects
  const resultsArray = Object.keys(results).map((key) => {
    const questionData = quizData[Number(key)];
    const answered = results[key] !== "Not Answered";
    const pickedAnswer =
      results[key] && answered ? Object.keys(results[key])[0] : false;
    const correctlyAnswered =
      results[key] && answered ? Object.values(results[key])[0] : false;
    const sortedAnswers =
      results[key] && answered
        ? [questionData.correctAnswer, ...questionData.incorrectAnswers].sort()
        : [];

    return {
      ...questionData,
      pickedAnswer,
      correctlyAnswered,
      questionNum: Number(key) + 1,
      sortedAnswers,
    };
  });

  const correctAnswers = Object.values(results).reduce(
    (count, result) => count + (Object.values(result)[0] === true ? 1 : 0),
    0
  );

  const categories = [
    // map quizData and find unique categories
    ...new Set(quizData.map((question) => question.category)),
  ];

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
          {(correctAnswers / totalQuestions) * 100}% Correct!🎊
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
          {resultsArray.map((result, index) =>
            result.correctlyAnswered === true ? (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "success.contrastText",
                  my: 1,
                  boxShadow: 1,
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.question.text}
                  secondary={`Correct!  the answer was: ${result.correctAnswer}`}
                />
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
              </ListItem>
            ) : result.pickedAnswer === false ? (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "info.contrastText",
                  my: 1,
                  boxShadow: 1,
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.question.text}
                  secondary={`No answer was picked. The correct answer was: ${result.correctAnswer}`}
                />
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
              </ListItem>
            ) : (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "error.contrastText",
                  my: 1,
                  boxShadow: 1,
                }}
              >
                <ListItemIcon>{result.questionNum}</ListItemIcon>
                <ListItemText
                  primary={result.question.text}
                  secondary={`Incorrect - You picked ${
                    result.sortedAnswers[Number(result.pickedAnswer)]
                  }, the correct answer was: ${result.correctAnswer}`}
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
