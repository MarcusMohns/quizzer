import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import StyledRadio from "./StyledRadio";
import { QuizQuestion } from "../../../store";
import { QuizResult } from "../../../store";
const LETTERS = ["A", "B", "C", "D"];
const TimeoutDelay = [100, 200, 300, 400];

interface AnswerProps {
  selectedAnswerIndex: number;
  handleSelectedAnswerIndex: (
    event: React.ChangeEvent<HTMLInputElement>
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
  correctlyAnswered,
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
                  "&:hover":
                    !quizState.completed && selectedAnswerIndex === -1
                      ? {
                          backgroundColor: "secondary.dark",
                        }
                      : "",
                  backgroundColor:
                    sortedAnswers[selectedAnswerIndex] === answer // if we selected this answer being rendered
                      ? correctlyAnswered // if the selected answer is correct
                        ? "success.dark" // Highlight it as green
                        : "error.dark" // if incorrect highlight it as red
                      : answer === questionData.correctAnswer && // if the answer being rendered isnt the one we selected but is the correct answer
                        selectedAnswerIndex !== -1
                      ? "success.dark" // make it green
                      : "secondary.main", // default to blue
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
                      sortedAnswers[selectedAnswerIndex] === answer // if we selected this answer being rendered
                        ? correctlyAnswered // if the selected answer is correct
                          ? "success.main" // Highlight it as green
                          : "error.light" // if incorrect highlight it as red
                        : answer === questionData.correctAnswer && // if the answer being rendered isnt the one we selected but is the correct answer
                          selectedAnswerIndex !== -1
                        ? "success.light" // make it green
                        : "primary.main", // default to blue
                    color: "primary.contrastText",
                  }}
                >
                  {LETTERS[index]}
                </Avatar>
                <FormControlLabel
                  disabled={
                    results[activeStep].pickedAnswerIndex !== -1 ||
                    quizState.completed
                  }
                  value={index}
                  label={answer}
                  name={answer}
                  control={<StyledRadio />}
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    p: { xs: 1, md: 2 },
                    m: 0,
                  }}
                />
              </ButtonBase>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default Answers;
