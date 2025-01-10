import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

const ScrollTopButton = ({ handleScroll, visible }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
      <Tooltip title="Scroll to top" aria-label="scrollToTop" placement="left">
        <Zoom in={visible} appear={true}>
          {/*  handleScroll(0) refers to the index of the scrollRef we want to scroll (scrollRefs[0] in this case is the WelcomeSection) */}
          <Fab color="secondary" onClick={() => handleScroll(0)}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Tooltip>
    </Box>
  );
};

export default ScrollTopButton;
