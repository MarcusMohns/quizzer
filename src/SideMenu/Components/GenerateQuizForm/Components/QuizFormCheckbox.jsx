import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const QuizFormCheckbox = ({ checkbox, handleChecked }) => {
  return (
    <FormControlLabel
      sx={{
        userSelect: "none",
        "&:hover": {
          background: "#00000036",
        },
      }}
      control={
        <Checkbox
          checked={checkbox.checked}
          onChange={handleChecked}
          name={checkbox.id}
          size="small"
        />
      }
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            fontSize: "17px",
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
