import { useState, memo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const GenerateQuizForm = ({ setQuizData }) => {
  const [formData, setFormData] = useState({
    difficulties: [
      { name: "Easy", id: "easy", checked: false, emoji: "🍏" },
      { name: "Medium", id: "medium", checked: false, emoji: "🍋" },
      { name: "Hard", id: "hard", checked: false, emoji: "🌶️" },
    ],
    categories: [
      { name: "Music", id: "music", checked: false, emoji: "🎵" },
      {
        name: "Sports and Leisure",
        id: "sport_and_leisure",
        checked: false,
        emoji: "⚽",
      },
      { name: "Film and TV", id: "film_and_tv", checked: false, emoji: "🎬" },
      {
        name: "Arts and Literature",
        id: "arts_and_literature",
        checked: false,
        emoji: "🎨",
      },
      { name: "History", id: "history", checked: false, emoji: "📜" },
      {
        name: "Society and Culture",
        id: "society_and_culture",
        checked: false,
        emoji: "🌍",
      },
      { name: "Science", id: "science", checked: false, emoji: "🔬" },
      { name: "Geography", id: "geography", checked: false, emoji: "🌍" },
      {
        name: "Food and Drink",
        id: "food_and_drink",
        checked: false,
        emoji: "🍔",
      },
      {
        name: "General Knowledge",
        id: "general_knowledge",
        checked: false,
        emoji: "🧠",
      },
    ],
    qty: "10",
  });

  const [loading, setLoading] = useState(false);

  const fetchQuiz = async () => {
    setLoading(true);

    const queryParams = new URLSearchParams({
      // Pass all checked checkboxes' ids into queryParams
      limit: formData.qty,
      categories: formData.categories
        .filter((category) => category.checked)
        .map((category) => category.id)
        .join(),
      difficulties: formData.difficulties
        .filter((difficulty) => difficulty.checked)
        .map((difficulty) => difficulty.id)
        .join(),
    });

    const reqString = `https://the-trivia-api.com/v2/questions?${queryParams}`;

    try {
      const response = await fetch(reqString);
      const data = await response.json();
      setQuizData(data);
      setLoading(false);
      console.log("fetching data...");
    } catch (error) {
      console.log("error fetching data...", error);
      setLoading(false);
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
    setFormData((prevData) => ({
      ...prevData,
      qty: event.target.value,
    }));
  };

  const handleCheckedCategory = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((category) =>
        category.id === event.target.name
          ? { ...category, checked: event.target.checked }
          : category
      ),
    }));
  };

  const handleCheckedDifficulty = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      difficulties: prevData.difficulties.map((difficulty) =>
        difficulty.id === event.target.name
          ? { ...difficulty, checked: event.target.checked }
          : difficulty
      ),
    }));
  };

  const toggleCategoryCheckBoxes = () => {
    setFormData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((category) => ({
        ...category,
        checked: allChecked(prevData.categories) ? false : true,
      })),
    }));
  };

  const toggleDifficultyCheckBoxes = () => {
    setFormData((prevData) => ({
      ...prevData,
      difficulties: prevData.difficulties.map((difficulty) => ({
        ...difficulty,
        checked: allChecked(prevData.difficulties) ? false : true,
      })),
    }));
  };

  // return true if all objects in array are checked
  const allChecked = (array) => array.every((entry) => entry.checked);

  // return true if some objects in array are checked
  const someChecked = (array) => array.some((entry) => entry.checked);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 3,
        width: "300px",
        height: "100%",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        aria-label="qty-questions"
        placeholder="Type a number…"
        name="questions"
        value={formData.qty}
        onChange={handleChange}
        type="number"
        label="Number of Questions:"
        sx={{ minWidth: 120 }}
        helperText="Enter a number between 1 & 50"
        error={formData.qty <= 0 || formData.qty > 50}
      />
      <FormControl
        sx={{ m: 0.5, minWidth: 120 }}
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
                  sx={{ p: 1, minWidth: "max-content" }}
                />
              }
              label={
                <Box sx={{ display: "flex", width: "max-content" }}>
                  {category.name}
                  <Typography fontSize="1.3rem">{category.emoji}</Typography>
                </Box>
              }
            />
          ))}
        </FormGroup>
        <FormHelperText>Select at least one category</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ m: 0.5, minWidth: 120 }}
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
                sx={{ p: 1 }}
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
                  sx={{ fontSize: "0.5rem" }}
                />
              }
              label={difficulty.name + difficulty.emoji}
            />
          ))}
        </FormGroup>
        <FormHelperText>Select at least one difficulty</FormHelperText>
      </FormControl>

      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        sx={{ mt: "auto", mb: 2 }}
      >
        Generate Quiz
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: "secondary.highlight",
              position: "absolute",
            }}
          />
        )}
      </Button>
    </Box>
  );
};

export default memo(GenerateQuizForm);
