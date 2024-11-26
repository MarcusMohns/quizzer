import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";

const categoryOptions = [
  { name: "Music", id: "music" },
  { name: "Sports and Leisure", id: "sport_and_leisure" },
  { name: "Film and TV", id: "film_and_tv" },
  { name: "Arts and Literature", id: "arts_and_literature" },
  { name: "History", id: "history" },
  { name: "Society and Culture", id: "society_and_culture" },
  { name: "Science", id: "science" },
  { name: "Geography", id: "geography" },
  { name: "Food and Drink", id: "food_and_drink" },
  { name: "General Knowledge", id: "general_knowledge" },
];

const difficultyOptions = [
  { name: "Easy", id: "easy" },
  { name: "Medium", id: "medium" },
  { name: "Hard", id: "hard" },
];

const QuizSelectForm = ({ setQuizData }) => {
  QuizSelectForm.propTypes = {
    setQuizData: PropTypes.func.isRequired,
  };

  const [formData, setFormData] = useState({
    type: "Any Type",
    difficulties: {
      easy: true,
      medium: true,
      hard: true,
    },
    categories: {
      arts_and_literature: true,
      film_and_tv: true,
      food_and_drink: true,
      geography: true,
      history: true,
      music: true,
      science: true,
      society_and_culture: true,
      sport_and_leisure: true,
      general_knowledge: true,
    },
    qty: "1",
  });

  const fetchQuiz = async () => {
    const limitRequest = `limit=${formData.qty}`;
    const categoriesRequestArray = categoryOptions.map(
      (category) => `${category.id}`
    );
    const categoriesRequest = categoriesRequestArray.join();
    const difficultiesRequestArray = difficultyOptions.map(
      (difficulty) => `${difficulty.id}`
    );
    const difficultiesRequest = difficultiesRequestArray.join();

    const regionRequest = "GB";

    const reqString = `https://the-trivia-api.com/v2/questions?${limitRequest}&${categoriesRequest}&${difficultiesRequest}&${regionRequest}`;

    try {
      const response = await fetch(reqString);
      const data = await response.json();
      setQuizData(data.results);
      console.log(data);
    } catch (error) {
      console.log("error fetching data...", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO flesh out error handling
    if (formData.qty > 0 || formData.qty < 50) {
      fetchQuiz();
    }
  };

  const handleChange = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleCheckedCategory = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        categories: {
          ...prevData.categories,
          [event.target.name]: event.target.checked,
        },
      };
    });
  };

  const handleCheckedDifficulty = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        difficulties: {
          ...prevData.difficulties,
          [event.target.name]: event.target.checked,
        },
      };
    });
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", p: 5 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ m: 2, textAlign: "center" }}
      >
        Generate a Quiz
      </Typography>
      <TextField
        aria-label="qty-questions"
        placeholder="Type a number…"
        name="questions"
        value={formData.qty}
        onChange={handleChange}
        label="Number of Questions:"
        sx={{ m: 1, minWidth: 120 }}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormLabel component="legend" id="category-select-label">
          Select Category
        </FormLabel>
        <FormGroup>
          {categoryOptions.map((category) => (
            <FormControlLabel
              key={category.id}
              control={
                <Checkbox
                  checked={formData.categories[category.id]}
                  onChange={handleCheckedCategory}
                  name={category.id}
                />
              }
              label={category.name}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormLabel component="legend" id="difficulty-select-label">
          Select Difficulty
        </FormLabel>
        <FormGroup>
          {difficultyOptions.map((difficulty) => (
            <FormControlLabel
              key={difficulty.id}
              control={
                <Checkbox
                  checked={formData.categories[difficulty.id]}
                  onChange={handleCheckedDifficulty}
                  name={difficulty.id}
                />
              }
              label={difficulty.name}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Button variant="contained" type="submit">
        Generate Quiz
      </Button>
    </Box>
  );
};

export default QuizSelectForm;
