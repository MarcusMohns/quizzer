import React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const SelectTimer = ({ timeLimit, setTimeLimit }) => {
  const minutes = [0, 1, 2, 5, 7, 10, 15, 20, 25, 30];
  const seconds = [0, 5, 10, 15, 20, 25, 30, 40, 50];

  const handleChange = (event) => {
    setTimeLimit({ ...timeLimit, [event.target.name]: event.target.value });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "30%", p: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="minutes">Minutes</InputLabel>
        <Select
          labelId="minutes"
          name="minutes"
          id="minutes-select"
          value={timeLimit.minutes}
          label="Minutes"
          onChange={handleChange}
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
          onChange={handleChange}
        >
          {seconds.map((second) => (
            <MenuItem value={second} key={second} name="seconds">
              {second}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTimer;
