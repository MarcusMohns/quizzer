import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import StyledRadio from "./StyledRadio";
import { QuizQuestion } from "../../../store";
import { QuizResult } from "../../../store";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
const LETTERS = ["A", "B", "C", "D"];
const TimeoutDelay = [100, 200, 300, 400];

interface AnswerProps {
  selectedAnswerIndex: number;
  handleSelectedAnswerIndex: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  sortedAnswers: string[];
  questionData: QuizQuestion;
  activeStep: number;
  results: QuizResult[];
  correctlyAnswered: boolean;
  quizState: {
    started: boolean;
    completed: boolean;
  };
}

const Answers = ({
  selectedAnswerIndex,
  handleSelectedAnswerIndex,
  sortedAnswers,
  questionData,
  activeStep,
  results,
  // correctlyAnswered,
  quizState,
}: AnswerProps) => {
  const theme = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isLocked =
        results[activeStep].pickedAnswerIndex !== -1 || quizState.completed;

      if (isLocked) {
        return;
      }

      const key = event.key.toUpperCase();
      const index = LETTERS.indexOf(key);

      if (index !== -1 && index < sortedAnswers.length) {
        handleSelectedAnswerIndex({
          target: {
            value: index.toString(),
            name: sortedAnswers[index],
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeStep,
    handleSelectedAnswerIndex,
    quizState.completed,
    results,
    sortedAnswers,
  ]);

  return (
    <RadioGroup
      value={selectedAnswerIndex}
      onChange={handleSelectedAnswerIndex}
      aria-label="question"
      sx={{
        px: 3,
        py: 2,
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        {sortedAnswers.map((answer, index) => {
          const isSelected = selectedAnswerIndex === index;
          const isLocked =
            results[activeStep].pickedAnswerIndex !== -1 || quizState.completed;
          const isCorrect = answer === questionData.correctAnswer;

          const isDarkMode = theme.palette.mode === "dark";
          let borderColor = theme.palette.secondary.main;
          let bgcolor: string = theme.palette.secondary.main;

          let avatarColor = theme.palette.primary.light;

          if (isLocked) {
            if (isCorrect) {
              borderColor = theme.palette.success.main;
              bgcolor = alpha(theme.palette.success.main, 0.55);
              avatarColor = theme.palette.success.main;
            } else if (isSelected) {
              borderColor = theme.palette.error.main;
              bgcolor = alpha(theme.palette.error.main, 0.55);
              avatarColor = theme.palette.error.main;
            }
          } else if (isSelected) {
            borderColor = theme.palette.secondary.main;
            bgcolor = isDarkMode
              ? alpha(theme.palette.primary.main, 0.4)
              : alpha(theme.palette.primary.main, 0.6);
          }

          return (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={answer}
              sx={{ display: "flex" }}
            >
              <Fade
                in={true}
                key={`${questionData.id}-${index}`}
                easing={"ease-in-out"}
                style={{ transitionDelay: `${TimeoutDelay[index]}ms` }}
              >
                <ButtonBase
                  component="label"
                  disabled={isLocked}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    p: 2,
                    border: "1px solid",
                    borderColor: borderColor,
                    bgcolor: bgcolor,
                    display: "flex",
                    transform: isSelected ? "scale(1.02)" : "none",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      transform: !isLocked ? "scale(1.02)" : "none",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      bgcolor: avatarColor,
                      color: "primary.contrastText",
                      mr: 1,
                      alignSelf: "flex-start",
                    }}
                  >
                    {LETTERS[index]}
                  </Avatar>
                  <StyledRadio
                    value={index}
                    disabled={isLocked}
                    name={answer}
                    sx={{ display: "none" }}
                  />
                  <Typography variant="body1">{answer}</Typography>
                </ButtonBase>
              </Fade>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
};

export default Answers;
