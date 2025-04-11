import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import StyledRadio from "./StyledRadio";

const LETTERS = ["A", "B", "C", "D"];
const TimeoutDelay = [100, 200, 300, 400];

const Answers = ({
  selectedAnswer,
  handleSelectedAnswer,
  sortedAnswers,
  questionData,
  activeStep,
  results,
  correctlyAnswered,
  quizState,
}) => {
  return (
    <RadioGroup
      value={selectedAnswer}
      onChange={handleSelectedAnswer}
      aria-label="question"
      sx={{
        px: 3,
        py: 2,
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
            <Fade
              in={true}
              key={`${questionData.id}-${index}`}
              easing={"ease-in-out"}
              style={{ transitionDelay: `${TimeoutDelay[index]}ms` }}
            >
              <ButtonBase
                sx={{
                  flexDirection: "row",
                  width: "100%",
                  borderRadius: "2px",
                  m: 0,
                  transition: "background .2s ease-in-out",
                  "&:hover": !quizState.completed &&
                    selectedAnswer === "Not Answered" && {
                      backgroundColor: "info.veryDark",
                    },
                  backgroundColor:
                    sortedAnswers[selectedAnswer] === answer // if we selected this answer being rendered
                      ? correctlyAnswered // if the selected answer is correct
                        ? "success.cool" // Highlight it as green
                        : "error.cool" // if incorrect highlight it as red
                      : answer === questionData.correctAnswer && // if the answer being rendered isnt the one we selected but is the correct answer
                        selectedAnswer !== "Not Answered"
                      ? "success.lightCool" // make it green
                      : "secondary.cool", // default to blue
                  boxShadow: 3,
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
                      sortedAnswers[selectedAnswer] === answer // if we selected this answer being rendered
                        ? correctlyAnswered // if the selected answer is correct
                          ? "success.main" // Highlight it as green
                          : "error.light" // if incorrect highlight it as red
                        : answer === questionData.correctAnswer && // if the answer being rendered isnt the one we selected but is the correct answer
                          selectedAnswer !== "Not Answered"
                        ? "success.light" // make it green
                        : "secondary.main", // default to blue
                  }}
                >
                  {LETTERS[index]}
                </Avatar>
                <FormControlLabel
                  disabled={
                    results[activeStep] !== "Not Answered" ||
                    (results[activeStep] === "Not Answered" &&
                      quizState.completed === true)
                  }
                  component={FormControlLabel}
                  value={index}
                  label={answer}
                  name={answer}
                  control={<StyledRadio />}
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    p: { xs: 1, md: 2 },
                    m: 0,
                    fontWeight: "bold",
                  }}
                >
                  {answer}
                </FormControlLabel>
              </ButtonBase>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default Answers;
