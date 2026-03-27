import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import QuizFormCheckbox from "./QuizFormCheckbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormData } from "../store";
import { memo } from "react";

interface CategoryCheckboxesProps {
  categories: FormData["categories"];
  toggleCategoryCheckBoxes: () => void;
  handleCheckedCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryCheckboxes = ({
  categories,
  toggleCategoryCheckBoxes,
  handleCheckedCategory,
}: CategoryCheckboxesProps) => {
  const allChecked = categories.every((c) => c.checked);
  const someChecked = categories.some((c) => c.checked);

  return (
    <FormControl
      component="fieldset"
      error={!someChecked}
      sx={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <FormLabel component="legend" color="info">
          Categories
        </FormLabel>
        <Button size="small" onClick={toggleCategoryCheckBoxes} color="info">
          {allChecked ? "Unselect All" : "Select All"}
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {categories.map((category) => (
          <QuizFormCheckbox
            key={category.id}
            checkbox={category}
            handleChecked={handleCheckedCategory}
          />
        ))}
      </Box>
      <FormHelperText>Select at least one category</FormHelperText>
    </FormControl>
  );
};

export default memo(CategoryCheckboxes);
