import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import fetchQuiz from "./store";
import DifficulyCheckboxes from "./components/DifficultyCheckboxes";
import CategoryCheckboxes from "./components/CategoryCheckboxes";
import { QuizState } from "../../../store";
import { someChecked, allChecked, defaultFormData } from "./store";

interface GenerateQuizFormProps {
  setQuizData: (data: QuizState | null) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
}

const GenerateQuizForm = ({
  setQuizData,
  handleSideMenuOpen,
}: GenerateQuizFormProps) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ bool: false, name: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      someChecked(formData.categories) &&
      someChecked(formData.difficulties) &&
      Number(formData.qty) > 0 &&
      Number(formData.qty) < 50
    ) {
      fetchQuiz(
        formData,
        setQuizData,
        setLoading,
        handleSideMenuOpen,
        setError
      );
      setLoading(true);
    } else {
      console.error("Missing category or difficulty");
    }
  };

  const handleQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      qty: event.target.value,
    }));
  };

  const handleCheckedCategory = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        categories: prevData.categories.map((category) =>
          category.id === event.target.name
            ? { ...category, checked: event.target.checked }
            : category
        ),
      }));
    },
    []
  );

  const handleCheckedDifficulty = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        difficulties: prevData.difficulties.map((difficulty) =>
          difficulty.id === event.target.name
            ? { ...difficulty, checked: event.target.checked }
            : difficulty
        ),
      }));
    },
    []
  );

  const toggleCategoryCheckBoxes = useCallback(() => {
    setFormData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((category) => ({
        ...category,
        checked: allChecked(prevData.categories) ? false : true,
      })),
    }));
  }, []);

  const toggleDifficultyCheckBoxes = useCallback(() => {
    setFormData((prevData) => ({
      ...prevData,
      difficulties: prevData.difficulties.map((difficulty) => ({
        ...difficulty,
        checked: allChecked(prevData.difficulties) ? false : true,
      })),
    }));
  }, []);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 3,
        width: "300px",
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
        color="info"
        sx={{ minWidth: 120 }}
        helperText="Enter a number between 1 & 50"
        error={Number(formData.qty) <= 0 || Number(formData.qty) > 50}
      />

      <CategoryCheckboxes
        categories={formData.categories}
        toggleCategoryCheckBoxes={toggleCategoryCheckBoxes}
        handleCheckedCategory={handleCheckedCategory}
      />
      <DifficulyCheckboxes
        difficulties={formData.difficulties}
        toggleDifficultyCheckBoxes={toggleDifficultyCheckBoxes}
        handleCheckedDifficulty={handleCheckedDifficulty}
        allChecked={allChecked}
        someChecked={someChecked}
      />
      {error.bool && (
        <Alert
          variant="outlined"
          severity="error"
          sx={{
            mt: "auto",
            mb: 1,
          }}
        >
          {error.name}: {error.message}!
        </Alert>
      )}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={loading}
        sx={{ mb: 2, mt: "auto", boxShadow: 3 }}
        loading={loading}
        loadingIndicator={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading
            <CircularProgress size={20} sx={{ ml: "12px" }} />
          </Box>
        }
      >
        Generate Quiz
      </Button>
    </Box>
  );
};

export default GenerateQuizForm;
