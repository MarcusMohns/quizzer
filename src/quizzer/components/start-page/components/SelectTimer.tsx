import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import { SelectChangeEvent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { alpha } from "@mui/material";

interface SelectTimerProps {
  timeLimit: {
    minutes: number;
    seconds: number;
  };
  handleSetTimeLimit: (timeLimit: { minutes: number; seconds: number }) => void;
}
const SelectTimer = ({ timeLimit, handleSetTimeLimit }: SelectTimerProps) => {
  const minutes = [0, 1, 2, 5, 7, 10, 15, 20, 25, 30, 45, 60];
  const seconds = [0, 5, 10, 15, 20, 25, 30, 40, 50];

  const handleChange = (event: SelectChangeEvent<number>) => {
    handleSetTimeLimit({
      ...timeLimit,
      [event.target.name]: event.target.value as number,
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        p: 3,
        borderRadius: 4,
        mt: 3,
        mb: 2,
        display: "flex",
        bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.25),
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <AccessTimeIcon color="info" />
        <Typography variant="h6" fontWeight="bold">
          Time Limit
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Set a time limit for the full quiz
      </Typography>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          minWidth: "150px",
          mt: 2,
        }}
        spacing={2}
      >
        <FormControl fullWidth>
          <InputLabel id="minutes" color="info">
            Minutes
          </InputLabel>
          <Select
            labelId="minutes"
            name="minutes"
            id="minutes-select"
            value={timeLimit.minutes}
            label="Minutes"
            variant="outlined"
            onChange={handleChange}
            aria-hidden="false"
          >
            {minutes.map((minute) => (
              <MenuItem value={minute} key={minute} aria-label="minutes">
                {minute}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="seconds" color="info">
            Seconds
          </InputLabel>
          <Select
            labelId="seconds"
            name="seconds"
            id="seconds-select"
            value={timeLimit.seconds}
            label="Seconds"
            variant="outlined"
            onChange={handleChange}
            aria-hidden="false"
          >
            {seconds.map((second) => (
              <MenuItem value={second} key={second} aria-label="seconds">
                {second}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <FormHelperText
        error
        sx={{
          visibility:
            timeLimit.minutes <= 0 && timeLimit.seconds <= 0
              ? "visible"
              : "hidden",
        }}
      >
        Add some time to the timer
      </FormHelperText>
    </Paper>
  );
};

export default SelectTimer;
