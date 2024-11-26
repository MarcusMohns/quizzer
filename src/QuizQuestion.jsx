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

const letters = ["A", "B", "C", "D"];

const QuizQuestion = ({ questionData }) => {
  QuizQuestion.propTypes = {
    questionData: PropTypes.object.isRequired,
  };

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

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
        {questionData.question}
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
          {questionData.incorrect_answers.map((answer, index) => (
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
