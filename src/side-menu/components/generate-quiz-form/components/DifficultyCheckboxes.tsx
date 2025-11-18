import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import QuizFormCheckbox from "./QuizFormCheckbox";
import { memo } from "react";
import { FormData } from "../store";

interface DifficulyCheckboxesProps {
  difficulties: FormData["difficulties"];
  toggleDifficultyCheckBoxes: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleCheckedDifficulty: (event: React.ChangeEvent<HTMLInputElement>) => void;
  allChecked: (difficulties: FormData["difficulties"]) => boolean;
  someChecked: (difficulties: FormData["difficulties"]) => boolean;
}
const DifficulyCheckboxes = ({
  difficulties,
  toggleDifficultyCheckBoxes,
  handleCheckedDifficulty,
  allChecked,
  someChecked,
}: DifficulyCheckboxesProps) => {
  return (
    <FormControl
      sx={{ m: 0.5, minWidth: 120 }}
      error={!someChecked(difficulties)}
    >
      <FormLabel color="info" id="difficulty-select-label">
        Select Difficulty
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          label="All Difficulties"
          sx={{
            userSelect: "none",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
          control={
            <Checkbox
              checked={allChecked(difficulties)}
              indeterminate={someChecked(difficulties)}
              onChange={toggleDifficultyCheckBoxes}
              name={"all-difficulties-checkbox"}
              color="info"
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

export default memo(DifficulyCheckboxes);
