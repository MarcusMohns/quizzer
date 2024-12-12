import Box from "@mui/material/Box";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Zoom from "@mui/material/Zoom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import tags from "./images/tags.jsx";

const LETTERS = ["A", "B", "C", "D"];

const QuizQuestion = ({
  questionData,
  setResults,
  results,
  activeStep,
  setCompleted,
}) => {
  QuizQuestion.propTypes = {
    questionData: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    setResults: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
    setCompleted: PropTypes.func.isRequired,
  };

  // Get the previous selected answer if it exists
  // If it doesn't, default to ""
  const prevSelectedAnswer = results[activeStep]
    ? Object.keys(results[activeStep]).find(
        (key) => results[activeStep][key] !== undefined
      ) || ""
    : "";

  const [selectedAnswer, setSelectedAnswer] = useState(prevSelectedAnswer);

  const sortedAnswers = [
    // Sort answers alphabetically
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ].sort();

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
    setResults((prevResults) => ({
      ...prevResults,
      [activeStep]:
        e.target.name === questionData.correctAnswer
          ? { [e.target.value]: true }
          : { [e.target.value]: false },
    }));
  };

  // Check if the selected answer is correct
  const correctlyAnswered =
    results[activeStep] !== undefined &&
    results[activeStep][selectedAnswer] === true;

  const handleComplete = () => {
    setCompleted((prevCompleted) => ({ ...prevCompleted, [activeStep]: true }));
  };

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    setSelectedAnswer(prevSelectedAnswer);
  }, [activeStep, prevSelectedAnswer]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 2, md: 5 },
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          p: 2,
          mb: 4,
          borderRadius: "10px",
          fontSize: { xs: "1.4rem", md: "1.8rem" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Avatar
            variant="rounded"
            sx={{ width: 30, height: 30, mb: { xs: 2, md: 0 } }}
          >
            {activeStep + 1}
          </Avatar>
          <Typography variant="h5" sx={{ ml: { xs: 0, md: 1 } }}>
            {questionData.question.text}
          </Typography>
        </Stack>
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start" }}
        direction="column"
      >
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ alignItems: "center", flexWrap: "wrap" }}
        >
          <Typography sx={{ textAlign: "center" }} variant="subtitle2">
            tags:
          </Typography>
          <Chip
            variant="outlined"
            label={tags[questionData.category].title}
            icon={tags[questionData.category].icon}
          />
          <Chip variant="outlined" label={questionData.difficulty} />

          {questionData.tags.map((tag) => (
            <Chip label={tag} key={tag} />
          ))}
        </Stack>
      </Box>

      <RadioGroup
        value={selectedAnswer}
        onChange={handleChange}
        aria-label="question"
        sx={{
          width: { xs: "100%", md: "60%" },
          p: 3,
        }}
      >
        <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
          {sortedAnswers.map((answer, index) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={answer}
              sx={{
                display: "flex",
              }}
            >
              <ButtonBase
                sx={{
                  flexDirection: "row",
                  width: "100%",
                  borderRadius: "15px",
                  m: 0,
                  "&:hover": {
                    border: "2px solid white",
                  },
                  border: "2px solid",
                  borderColor:
                    sortedAnswers[selectedAnswer] === answer
                      ? correctlyAnswered
                        ? "success.main"
                        : "error.light"
                      : "secondary.main",
                  boxShadow: 8,
                }}
              >
                <Avatar
                  sx={{
                    position: "relative",
                    top: 5,
                    left: 10,
                    width: 24,
                    height: 24,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    backgroundColor:
                      sortedAnswers[selectedAnswer] === answer
                        ? correctlyAnswered
                          ? "green"
                          : "red"
                        : "secondary.main",
                  }}
                >
                  {LETTERS[index]}
                </Avatar>
                <FormControlLabel
                  disabled={results[activeStep] !== undefined}
                  component={FormControlLabel}
                  value={index}
                  label={answer}
                  onClick={handleComplete}
                  name={answer}
                  control={
                    <Radio size="medium" sx={{ color: "secondary.main" }} />
                  }
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    p: { xs: 1, md: 2 },
                    m: 0,
                  }}
                >
                  {answer}
                </FormControlLabel>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      <Box sx={{ minHeight: "100px", display: "flex", alignItems: "center" }}>
        {results[activeStep] !== undefined &&
          (correctlyAnswered ? (
            <Zoom in={results[activeStep] !== undefined}>
              <Alert
                severity="success"
                variant="outlined"
                sx={{ textAlign: "center" }}
              >
                <AlertTitle>
                  Correct! The answer is:{" "}
                  <Typography
                    component="span"
                    sx={{ fontWeight: "bold", ml: 0.2, color: "primary.main" }}
                  >
                    {questionData.correctAnswer}
                  </Typography>
                </AlertTitle>
              </Alert>
            </Zoom>
          ) : (
            <Zoom in={results[activeStep] !== undefined}>
              <Alert
                severity="error"
                variant="outlined"
                sx={{ textAlign: "center" }}
              >
                <AlertTitle>
                  Incorrect! The answer to the question is:{" "}
                  <Typography
                    component="span"
                    sx={{ fontWeight: "bold", ml: 0.2, color: "primary.main" }}
                  >
                    {questionData.correctAnswer}
                  </Typography>
                </AlertTitle>
              </Alert>
            </Zoom>
          ))}
      </Box>
    </Box>
  );
};

export default QuizQuestion;
