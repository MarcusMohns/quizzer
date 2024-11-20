import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

const categories = [
  "Any Category",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: Comics",
  "Science: Gadgets",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations",
];

const difficulties = ["Any Difficulty", "Easy", "Medium", "Hard"];

const types = ["Any Type", "Multiple Choice", "True/False"];

const QuizSelectForm = ({ setQuizData }) => {
  const [formData, setFormData] = useState({
    type: "Any Type",
    difficulty: "Any Difficulty",
    category: "Any Category",
    questions: "10",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setQuizData(formData);
  };

  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
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
        aria-label="Demo number input"
        placeholder="Type a number…"
        name="questions"
        value={formData.questions}
        onChange={handleChange}
        label="Number of Questions:"
        sx={{ m: 1, minWidth: 120 }}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={formData.category}
          name="category"
          label="Select Category"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="difficulty-select-label">Select Difficulty</InputLabel>
        <Select
          labelId="difficulty-select-label"
          id="difficulty-select"
          value={formData.difficulty}
          name="difficulty"
          label="Select Difficulty"
          onChange={handleChange}
        >
          {difficulties.map((difficulty) => (
            <MenuItem key={difficulty} value={difficulty}>
              {difficulty}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type-select-label">Select Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={formData.type}
          name="type"
          label="Select Type"
          onChange={handleChange}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Generate Quiz
      </Button>
    </Box>
  );
};

export default QuizSelectForm;
