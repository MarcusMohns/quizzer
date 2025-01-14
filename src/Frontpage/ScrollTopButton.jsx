import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

const ScrollTopButton = ({ scrollToTop, visible }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
      <Tooltip title="Scroll to top" aria-label="scrollToTop" placement="left">
        <Zoom in={visible} appear={true}>
          <Fab color="secondary" onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Tooltip>
    </Box>
  );
};

export default ScrollTopButton;
