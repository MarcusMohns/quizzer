import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import QuizFormCheckbox from "./QuizFormCheckbox";

const DifficulyCheckboxes = ({
  difficulties,
  toggleDifficultyCheckBoxes,
  handleCheckedDifficulty,
  allChecked,
  someChecked,
}) => {
  return (
    <FormControl
      sx={{ m: 0.5, minWidth: 120 }}
      error={!someChecked(difficulties)}
    >
      <FormLabel component="legend" id="difficulty-select-label">
        Select Difficulty
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          label="All Difficulties"
          sx={{
            "&:hover": {
              background: "#00000036",
            },
          }}
          control={
            <Checkbox
              checked={allChecked(difficulties)}
              indeterminate={someChecked(difficulties)}
              onChange={toggleDifficultyCheckBoxes}
              name={"all-difficulties-checkbox"}
              sx={{ p: 1 }}
            />
          }
        />
        {difficulties.map((difficulty) => (
          <QuizFormCheckbox
            checkbox={difficulty}
            handleChecked={handleCheckedDifficulty}
            key={difficulty.id}
          />
        ))}
      </FormGroup>
      <FormHelperText>Select at least one difficulty</FormHelperText>
    </FormControl>
  );
};

export default DifficulyCheckboxes;
