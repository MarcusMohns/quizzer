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
}
const DifficultyCheckboxes = ({
  difficulties,
  toggleDifficultyCheckBoxes,
  handleCheckedDifficulty,
}: DifficulyCheckboxesProps) => {
  const isAllChecked = difficulties.every((d) => d.checked);
  const isSomeChecked = difficulties.some((d) => d.checked);

  return (
    <FormControl
      component="fieldset"
      sx={{ width: "100%" }}
      error={!isSomeChecked}
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
          {isAllChecked ? "Unselect All" : "Select All"}
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
