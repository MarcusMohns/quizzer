import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import QuizFormCheckbox from "./QuizFormCheckbox";

const CategoryCheckboxes = ({
  formData,
  toggleCategoryCheckBoxes,
  handleCheckedCategory,
  allChecked,
  someChecked,
}) => {
  return (
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

export default CategoryCheckboxes;
