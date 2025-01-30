import React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";

const SelectTimer = ({ timeLimit, setTimeLimit }) => {
  const minutes = [0, 1, 2, 5, 7, 10, 15, 20, 25, 30];
  const seconds = [0, 5, 10, 15, 20, 25, 30, 40, 50];

  const handleChange = (event) => {
    setTimeLimit({ ...timeLimit, [event.target.name]: event.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
        mb: 2,
      }}
    >
      Set a time limit for the full quiz ⏲️
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
          <InputLabel id="minutes">Minutes</InputLabel>
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
              <MenuItem value={minute} key={minute}>
                {minute}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="seconds">Seconds</InputLabel>
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
              <MenuItem
                value={second}
                key={second}
                name="seconds"
                aria-label="minutes"
              >
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
    </Box>
  );
};

export default SelectTimer;
