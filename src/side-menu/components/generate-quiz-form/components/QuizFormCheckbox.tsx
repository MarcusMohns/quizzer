import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import { FormCheckBox } from "../store";

interface QuizFormCheckBoxProps {
  checkbox: FormCheckBox;
  handleChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const QuizFormCheckbox = ({
  checkbox,
  handleChecked,
}: QuizFormCheckBoxProps) => {
  return (
    <FormControlLabel
      sx={{
        userSelect: "none",
        "&:hover": {
          backgroundColor: "secondary.light",
        },
      }}
      control={
        <Checkbox
          checked={checkbox.checked}
          onChange={handleChecked}
          name={checkbox.id}
          size="small"
          color="info"
        />
      }
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {checkbox.name}
          <Typography fontSize="1.3rem">{checkbox.emoji}</Typography>
        </Box>
      }
    />
  );
};

export default QuizFormCheckbox;
