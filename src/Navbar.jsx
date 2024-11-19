import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import ThemeToggler from "./Components/ThemeToggler";
import SideMenu from "./Components/SideMenu";

export default function ButtonAppBar({ darkMode, setDarkMode }) {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quizzer
          </Typography>
          <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
