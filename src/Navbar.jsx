import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import ThemeToggler from "./Components/ThemeToggler";

export default function ButtonAppBar({ darkMode, setDarkMode }) {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
