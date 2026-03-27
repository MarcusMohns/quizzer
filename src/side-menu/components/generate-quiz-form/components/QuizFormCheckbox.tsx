import { FormCheckBox } from "../store";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { alpha, useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { memo } from "react";

interface QuizFormCheckboxProps {
  checkbox: FormCheckBox;
  handleChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuizFormCheckbox = ({
  checkbox,
  handleChecked,
}: QuizFormCheckboxProps) => {
  const theme = useTheme();
  const checked = checkbox.checked;

  return (
    <ButtonBase
      component="label"
      sx={{
        width: "max-content",
        borderRadius: 3,
        border: "1px solid",
        borderColor: checked ? "secondary.dark" : "divider",
        bgcolor: checked
          ? alpha(theme.palette.secondary.dark, 0.5)
          : alpha(theme.palette.primary.light, 0.1),
        px: 0.8,
        py: 0.2,
        mb: 0.2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        transition: "all 0.2s",
        "&:hover": {
          borderColor: checked ? "secondary.dark" : "text.secondary",
        },
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleChecked}
        name={checkbox.id}
        icon={<RadioButtonUncheckedIcon color="action" />}
        checkedIcon={<CheckCircleIcon color="action" />}
        sx={{ p: 0.5 }}
      />
      <Typography
        variant="body2"
        color={checked ? "text.primary" : "text.primary"}
        sx={{ textAlign: "left" }}
      >
        {checkbox.name}
        <span style={{ marginLeft: 5, fontSize: "1.1rem" }}>
          {checkbox.emoji}
        </span>
      </Typography>
    </ButtonBase>
  );
};

export default memo(QuizFormCheckbox);
