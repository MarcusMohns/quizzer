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

const letters = ["A", "B", "C", "D"];

const QuizQuestion = ({ questionData, setResults, results, activeStep }) => {
  QuizQuestion.propTypes = {
    questionData: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    setResults: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
  };

  const sortedAnswers = [
    // Sort answers alphabetically
    questionData.correctAnswer,
    ...questionData.incorrectAnswers,
  ].sort();

  const [selectedAnswer, setSelectedAnswer] = useState("");
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

  // Get the previous selected answer if it exists
  // If it doesn't, default to ""
  const prevSelectedAnswer = results[activeStep]
    ? Object.keys(results[activeStep]).find(
        (key) => results[activeStep][key] !== undefined
      ) || ""
    : "";

  // Set the selected answer to the previous selected answer
  useEffect(() => {
    if (prevSelectedAnswer !== undefined) setSelectedAnswer(prevSelectedAnswer);
  }, [activeStep, prevSelectedAnswer]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        mt: { xs: 2, md: 5 },
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", p: 5 }}>
        {questionData.question.text}
      </Typography>

      <RadioGroup
        value={selectedAnswer}
        onChange={handleChange}
        aria-label="question"
        sx={{
          width: { xs: "100%", md: "60%" },
          p: { xs: 5, md: 5 },
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
                  borderRadius: "8px",
                  m: 0,
                  border: "5px solid",
                  borderColor: "secondary.main",
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
                    backgroundColor: "secondary.main",
                  }}
                >
                  {letters[index]}
                </Avatar>
                <FormControlLabel
                  component={FormControlLabel}
                  value={index}
                  label={answer}
                  name={answer}
                  control={
                    <Radio size="medium" sx={{ color: "secondary.main" }} />
                  }
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    p: 2,
                  }}
                >
                  {answer}
                </FormControlLabel>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </Box>
  );
};

export default QuizQuestion;
