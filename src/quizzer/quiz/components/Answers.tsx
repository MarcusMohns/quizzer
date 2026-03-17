import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import StyledRadio from "./StyledRadio";
import { QuizQuestion } from "../../../store";
import { QuizResult } from "../../../store";
import { alpha, Theme } from "@mui/material/styles";
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

          let borderColor = "divider";
          let bgcolor: string | ((theme: Theme) => string) = "primary.main";

          if (isLocked) {
            if (isCorrect) {
              borderColor = "success.main";
              bgcolor = (theme) => alpha(theme.palette.success.main, 0.15);
            } else if (isSelected) {
              borderColor = "error.main";
              bgcolor = (theme) => alpha(theme.palette.error.main, 0.15);
            }
          } else if (isSelected) {
            borderColor = "primary.main";
            bgcolor = (theme) => alpha(theme.palette.primary.main, 0.1);
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
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    p: 2,
                    border: "2px solid",
                    borderColor: borderColor,
                    bgcolor: bgcolor,
                    transition: "all 0.2s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    "&:hover": {
                      bgcolor: !isLocked ? "action.hover" : bgcolor,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      bgcolor:
                        isLocked && (isCorrect || (isSelected && !isCorrect))
                          ? "background.paper"
                          : "primary.main",
                      color:
                        isLocked && (isCorrect || (isSelected && !isCorrect))
                          ? "text.primary"
                          : "primary.contrastText",
                      mr: 2,
                    }}
                  >
                    {LETTERS[index]}
                  </Avatar>
                  <FormControlLabel
                    disabled={isLocked}
                    value={index}
                    label={answer}
                    control={<StyledRadio sx={{ display: "none" }} />}
                    sx={{ m: 0, width: "100%" }}
                    name={answer}
                  />
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
