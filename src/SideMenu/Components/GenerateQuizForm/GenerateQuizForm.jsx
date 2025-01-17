import { useState, memo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import checkboxData from "./Components/checkboxData";
import fetchQuiz from "./API/fetchQuiz";
import DifficulyCheckboxes from "./Components/DifficultyCheckboxes";
import CategoryCheckboxes from "./Components/CategoryCheckboxes";

const GenerateQuizForm = ({ setQuizData, setOpenSideMenu }) => {
  const [formData, setFormData] = useState(checkboxData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      someChecked(formData.categories) &&
      someChecked(formData.difficulties) &&
      formData.qty > 0 &&
      formData.qty < 50
    ) {
      fetchQuiz(formData, setQuizData, setLoading);
      setOpenSideMenu(false);
    } else {
      console.error("Missing category or difficulty");
    }
  };

  const handleQtyChange = (event) => {
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
        onChange={handleQtyChange}
        type="number"
        label="Number of Questions:"
        sx={{ minWidth: 120 }}
        helperText="Enter a number between 1 & 50"
        error={formData.qty <= 0 || formData.qty > 50}
      />

      <CategoryCheckboxes
        formData={formData}
        toggleCategoryCheckBoxes={toggleCategoryCheckBoxes}
        handleCheckedCategory={handleCheckedCategory}
        allChecked={allChecked}
        someChecked={someChecked}
      />
      <DifficulyCheckboxes
        formData={formData}
        toggleDifficultyCheckBoxes={toggleDifficultyCheckBoxes}
        handleCheckedDifficulty={handleCheckedDifficulty}
        allChecked={allChecked}
        someChecked={someChecked}
      />

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
