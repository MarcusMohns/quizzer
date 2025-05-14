import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import millisToMinutesAndSeconds from "../store";
import { memo } from "react";

const LabledProgressBar = (props: { value: number; timer: number }) => {
  const color =
    props.value > 50 ? "success" : props.value > 25 ? "warning" : "error";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "80%",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          color={color}
          variant="determinate"
          {...props}
          aria-label="progress-bar"
          sx={{ height: { xs: "8px", md: "5px" } }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body1" color={color} aria-label="timer">
          {millisToMinutesAndSeconds(props.timer)}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(LabledProgressBar);
