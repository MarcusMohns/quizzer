import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import QuizFormCheckbox from "./QuizFormCheckbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { memo } from "react";
import { FormData } from "../store";

interface DifficulyCheckboxesProps {
  difficulties: FormData["difficulties"];
  toggleDifficultyCheckBoxes: () => void;
  handleCheckedDifficulty: (event: React.ChangeEvent<HTMLInputElement>) => void;
  allChecked: (difficulties: FormData["difficulties"]) => boolean;
  someChecked: (difficulties: FormData["difficulties"]) => boolean;
}
const DifficultyCheckboxes = ({
  difficulties,
  toggleDifficultyCheckBoxes,
  handleCheckedDifficulty,
  allChecked,
  someChecked,
}: DifficulyCheckboxesProps) => {
  return (
    <FormControl
      component="fieldset"
      sx={{ width: "100%" }}
      error={!someChecked(difficulties)}
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
          Difficulty
        </FormLabel>
        <Button size="small" onClick={toggleDifficultyCheckBoxes} color="info">
          {allChecked(difficulties) ? "Unselect All" : "Select All"}
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {difficulties.map((difficulty) => (
          <QuizFormCheckbox
            key={difficulty.id}
            checkbox={difficulty}
            handleChecked={handleCheckedDifficulty}
          />
        ))}
      </Box>
      <FormHelperText>Select at least one difficulty</FormHelperText>
    </FormControl>
  );
};

export default memo(DifficultyCheckboxes);
