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
import Fade from "@mui/material/Fade";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import tags from "../Utils/tags.jsx";
import Grow from "@mui/material/Grow";

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
    <Fade in={true} appear={true} timeout={1000}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 2, md: 4 },
          borderRadius: "10px",
          px: { sm: "5%", lg: "20%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "640px",
            height: "200px",
            justifySelf: "center",
            mb: 2,
          }}
        >
          <Box
            component="img"
            srcSet={`${
              tags[questionData.category].image
            }?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={tags[questionData.category].image}
            alt={questionData.category}
            loading="lazy"
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Typography
            sx={{
              position: "relative",
              bottom: "50%",
              width: "100%",
              backgroundColor: "#00000091",
              fontSize: "1.5rem",
              color: "white",
              textAlign: "center",
            }}
          >
            {[tags[questionData.category].title]}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            pb: 2,
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
              flexDirection: { xs: "column", md: "row", mt: 3 },
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
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
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
        <Grow in={true} appear={true} timeout={500} unmountOnExit={false}>
          <RadioGroup
            value={selectedAnswer}
            onChange={handleChange}
            aria-label="question"
            sx={{
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
                      borderRadius: "2px",
                      m: 0,
                      transition: "background .2s ease-in-out",
                      "&:hover": {
                        background: "#00000028",
                      },
                      border: "1px solid",
                      borderColor:
                        sortedAnswers[selectedAnswer] === answer
                          ? correctlyAnswered
                            ? "success.main"
                            : "error.light"
                          : answer === questionData.correctAnswer &&
                            selectedAnswer !== ""
                          ? "success.light"
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
                              ? "success.main"
                              : "error.light"
                            : answer === questionData.correctAnswer &&
                              selectedAnswer !== ""
                            ? "success.light"
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
                        fontWeight: "bold",
                      }}
                    >
                      {answer}
                    </FormControlLabel>
                  </ButtonBase>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </Grow>

        <Box
          sx={{
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {results[activeStep] !== undefined &&
            (correctlyAnswered ? (
              <Zoom in={results[activeStep] !== undefined}>
                <Alert
                  severity="success"
                  variant="outlined"
                  sx={{ textAlign: "center", m: 2 }}
                >
                  <AlertTitle>
                    Correct! The answer is:{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        ml: 0.2,
                        color: "primary.main",
                      }}
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
                  sx={{ textAlign: "center", m: 2, fontWeight: "bold" }}
                >
                  <AlertTitle>
                    Incorrect! The answer to the question is:{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        ml: 0.2,
                        color: "primary.main",
                      }}
                    >
                      {questionData.correctAnswer}
                    </Typography>
                  </AlertTitle>
                </Alert>
              </Zoom>
            ))}
        </Box>
      </Box>
    </Fade>
  );
};

export default QuizQuestion;
