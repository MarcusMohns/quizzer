import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";

const letters = ["A", "B", "C", "D"];

const Quiz = ({ questionData }) => {
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
        justifyContent: "center",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
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
          {[...questionData.incorrect_answers, questionData.correct_answer].map(
            (answer, index) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={answer}
                sx={{
                  display: "flex",
                }}
              >
                <ButtonBase
                  control={<Radio />}
                  sx={{
                    flexDirection: "row",
                    width: "100%",
                    backgroundColor: "#1d161644",
                    borderRadius: "3px",
                    m: 0,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      ml: 1,
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    {letters[index]}
                  </Avatar>

                  <FormControlLabel
                    component={FormControlLabel}
                    value={index}
                    label={answer}
                    control={<Radio />}
                    size="large"
                    sx={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    {answer}
                  </FormControlLabel>
                </ButtonBase>
              </Grid>
            )
          )}
        </Grid>
      </RadioGroup>
    </Box>
  );
};

export default Quiz;
