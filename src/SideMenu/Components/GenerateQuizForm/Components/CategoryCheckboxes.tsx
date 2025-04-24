import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import QuizFormCheckbox from "./QuizFormCheckbox.tsx";
import { memo } from "react";
import { allChecked, someChecked, FormData } from "../store";

interface CategoryCheckboxesProps {
  categories: FormData["categories"];
  toggleCategoryCheckBoxes: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleCheckedCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CategoryCheckboxes = ({
  categories,
  toggleCategoryCheckBoxes,
  handleCheckedCategory,
}: CategoryCheckboxesProps) => {
  // return true if all objects in array are checked
  return (
    <FormControl
      sx={{ m: 0.5, minWidth: 120 }}
      error={!someChecked(categories)}
    >
      <FormLabel color="info" id="category-select-label">
        Select Category
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          label="All Categories"
          sx={{
            userSelect: "none",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
          control={
            <Checkbox
              checked={allChecked(categories)}
              indeterminate={someChecked(categories)}
              onChange={toggleCategoryCheckBoxes}
              name={"all-categories-checkbox"}
            />
          }
        />
        {categories.map((category) => (
          <QuizFormCheckbox
            checkbox={category}
            handleChecked={handleCheckedCategory}
            key={category.id}
          />
        ))}
      </FormGroup>
      <FormHelperText>Select at least one category</FormHelperText>
    </FormControl>
  );
};

export default memo(CategoryCheckboxes);
