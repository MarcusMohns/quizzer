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

const QuizSelectForm = ({ setQuizData }) => {
  QuizSelectForm.propTypes = {
    setQuizData: PropTypes.func.isRequired,
  };

  const [formData, setFormData] = useState({
    difficulties: [
      { name: "Easy", id: "easy", checked: false },
      { name: "Medium", id: "medium", checked: false },
      { name: "Hard", id: "hard", checked: false },
    ],
    categories: [
      { name: "Music", id: "music", checked: false },
      { name: "Sports and Leisure", id: "sport_and_leisure", checked: false },
      { name: "Film and TV", id: "film_and_tv", checked: false },
      {
        name: "Arts and Literature",
        id: "arts_and_literature",
        checked: false,
      },
      { name: "History", id: "history", checked: false },
      {
        name: "Society and Culture",
        id: "society_and_culture",
        checked: false,
      },
      { name: "Science", id: "science", checked: false },
      { name: "Geography", id: "geography", checked: false },
      { name: "Food and Drink", id: "food_and_drink", checked: false },
      { name: "General Knowledge", id: "general_knowledge", checked: false },
    ],
    qty: "10",
  });

  const fetchQuiz = async () => {
    const limitRequest = `limit=${formData.qty}`;

    // Get all the categories to pass into the reqString
    const categoriesRequestArray = formData.categories.map(
      (category) => `${category.id}`
    );

    // Format the categories to work as our query string
    const categoriesRequest =
      categoriesRequestArray.length > 0
        ? `&${categoriesRequestArray.join()}`
        : "";

    // Get all the difficulties to pass into the reqString
    const difficultiesRequestArray = formData.difficulties.map(
      (difficulty) => `${difficulty.id}`
    );
    // Format the difficulties to work as our query string
    const difficultiesRequest =
      difficultiesRequestArray.length > 0
        ? `&${difficultiesRequestArray.join()}`
        : "";

    const reqString = `https://the-trivia-api.com/v2/questions?${limitRequest}${categoriesRequest}${difficultiesRequest}`;

    try {
      const response = await fetch(reqString);
      const data = await response.json();
      setQuizData(data.results);
      console.log("fetching data...");
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
        qty: event.target.value,
      };
    });
  };

  const handleCheckedCategory = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        categories: prevData.categories.map((category) =>
          category.id === event.target.name
            ? { ...category, checked: event.target.checked }
            : category
        ),
      };
    });
  };

  const handleCheckedDifficulty = (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        difficulties: prevData.difficulties.map((difficulty) =>
          difficulty.id === event.target.name
            ? { ...difficulty, checked: event.target.checked }
            : difficulty
        ),
      };
    });
  };

  const toggleCategoryCheckBoxes = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        categories: prevData.categories.map((category) => ({
          ...category,
          checked: allChecked(prevData.categories) ? false : true,
        })),
      };
    });
  };

  const toggleDifficultyCheckBoxes = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        difficulties: prevData.difficulties.map((difficulty) => ({
          ...difficulty,
          checked: allChecked(prevData.difficulties) ? false : true,
        })),
      };
    });
  };

  // return true if all difficulties are checked
  const allChecked = (array) => {
    return array.every((entry) => entry.checked);
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
          <FormControlLabel
            label="Parent"
            control={
              <Checkbox
                checked={allChecked(formData.categories)}
                indeterminate={allChecked(formData.categories)}
                onChange={toggleCategoryCheckBoxes}
              />
            }
          />
          {formData.categories.map((category) => (
            <FormControlLabel
              key={category.id}
              control={
                <Checkbox
                  checked={category.checked}
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
          <FormControlLabel
            label="Parent"
            control={
              <Checkbox
                checked={allChecked(formData.difficulties)}
                indeterminate={allChecked(formData.difficulties) === false}
                onChange={toggleDifficultyCheckBoxes}
              />
            }
          />
          {formData.difficulties.map((difficulty) => (
            <FormControlLabel
              key={difficulty.id}
              control={
                <Checkbox
                  checked={difficulty.checked}
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
