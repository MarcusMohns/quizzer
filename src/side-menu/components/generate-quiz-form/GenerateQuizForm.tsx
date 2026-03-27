import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import fetchQuiz from "./store";
import DifficultyCheckboxes from "./components/DifficultyCheckboxes";
import CategoryCheckboxes from "./components/CategoryCheckboxes";
import { QuizState } from "../../../store";
import { someChecked, allChecked, defaultFormData } from "./store";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface GenerateQuizFormProps {
  setQuizData: (data: QuizState | null) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>,
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
    const qtyNum = Number(formData.qty);
    const isCategoryValid = someChecked(formData.categories);
    const isDifficultyValid = someChecked(formData.difficulties);

    if (isCategoryValid && isDifficultyValid && qtyNum > 0 && qtyNum <= 50) {
      fetchQuiz(
        formData,
        setQuizData,
        setLoading,
        handleSideMenuOpen,
        setError,
      );
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
            : category,
        ),
      }));
    },
    [],
  );

  const handleCheckedDifficulty = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        difficulties: prevData.difficulties.map((difficulty) =>
          difficulty.id === event.target.name
            ? { ...difficulty, checked: event.target.checked }
            : difficulty,
        ),
      }));
    },
    [],
  );

  const toggleCategoryCheckBoxes = useCallback(() => {
    setFormData((prevData) => ({
      ...prevData,
      categories: (function (cats) {
        const isAll = allChecked(cats);
        return cats.map((c) => ({ ...c, checked: !isAll }));
      })(prevData.categories),
    }));
  }, []);

  const toggleDifficultyCheckBoxes = useCallback(() => {
    setFormData((prevData) => ({
      ...prevData,
      difficulties: (function (diffs) {
        const isAll = allChecked(diffs);
        return diffs.map((d) => ({ ...d, checked: !isAll }));
      })(prevData.difficulties),
    }));
  }, []);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
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
        sx={{ width: "100%" }}
        helperText="Enter a number between 1 & 50"
        error={Number(formData.qty) <= 0 || Number(formData.qty) > 50}
      />

      <CategoryCheckboxes
        categories={formData.categories}
        toggleCategoryCheckBoxes={toggleCategoryCheckBoxes}
        handleCheckedCategory={handleCheckedCategory}
      />
      <DifficultyCheckboxes
        difficulties={formData.difficulties}
        toggleDifficultyCheckBoxes={toggleDifficultyCheckBoxes}
        handleCheckedDifficulty={handleCheckedDifficulty}
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
        color="primary"
        disabled={loading}
        size="large"
        startIcon={!loading && <AutoAwesomeIcon />}
        sx={{
          mt: 2,
          py: 1.5,
          borderRadius: 2,
          fontWeight: "bold",
          boxShadow: 3,
        }}
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
