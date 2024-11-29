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
import FormHelperText from "@mui/material/FormHelperText";

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

    // Get all category ids strings to pass into the reqString

    // Make an array of strings from category ids that are checked to pass into the reqString
    const categoriesRequestArray = formData.categories
      .filter((category) => category.checked && category.id)
      .map((category) => category.id);

    // Format the categories to work as our query string
    const categoriesRequest =
      categoriesRequestArray.length > 0
        ? `&catagories=${categoriesRequestArray.join()}`
        : "";

    // Get all the difficulties to pass into the reqString
    const difficultiesRequestArray = formData.difficulties
      .filter((difficulty) => difficulty.checked && difficulty.id)
      .map((difficulty) => difficulty.id);
    // Format the difficulties to work as our query string
    const difficultiesRequest =
      difficultiesRequestArray.length > 0
        ? `&difficulties=${difficultiesRequestArray.join()}`
        : "";

    const reqString = `https://the-trivia-api.com/v2/questions?${limitRequest}${categoriesRequest}${difficultiesRequest}`;

    try {
      const response = await fetch(reqString);
      const data = await response.json();
      setQuizData(data);
      console.log("fetching data...");
    } catch (error) {
      console.log("error fetching data...", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      someChecked(formData.categories) &&
      someChecked(formData.difficulties) &&
      formData.qty > 0 &&
      formData.qty < 50
    ) {
      fetchQuiz();
    } else {
      console.log("add catagory or difficulty");
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

  // return tru if some categories are checked
  const someChecked = (array) => {
    return array.some((entry) => entry.checked);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 3,
        width: "100%",
      }}
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
        sx={{ minWidth: 120 }}
        helperText="Enter a number between 1 and 50"
        error={formData.qty <= 0 || formData.qty > 50}
      />
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        error={!someChecked(formData.categories)}
      >
        <FormLabel component="legend" id="category-select-label">
          Select Category
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            label="All Categories"
            control={
              <Checkbox
                checked={allChecked(formData.categories)}
                indeterminate={someChecked(formData.categories)}
                onChange={toggleCategoryCheckBoxes}
                name={"all-categories-checkbox"}
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
                  size="small"
                />
              }
              label={category.name}
            />
          ))}
        </FormGroup>
        <FormHelperText>Select at least one category</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        error={!someChecked(formData.difficulties)}
      >
        <FormLabel component="legend" id="difficulty-select-label">
          Select Difficulty
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            label="All Difficulties"
            control={
              <Checkbox
                checked={allChecked(formData.difficulties)}
                indeterminate={someChecked(formData.difficulties)}
                onChange={toggleDifficultyCheckBoxes}
                name={"all-difficulties-checkbox"}
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
                  size="small"
                />
              }
              label={difficulty.name}
            />
          ))}
        </FormGroup>
        <FormHelperText>Select at least one difficulty</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Generate Quiz
      </Button>
    </Box>
  );
};

export default QuizSelectForm;
