import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import ThemeToggler from "./Components/ThemeToggler";
import SideMenu from "./SideMenu";
import PropTypes from "prop-types";

export default function Navbar({
  darkMode,
  setDarkMode,
  setQuizData,
  openSideMenu,
  setOpenSideMenu,
}) {
  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    setQuizData: PropTypes.func.isRequired,
    openSideMenu: PropTypes.bool.isRequired,
    setOpenSideMenu: PropTypes.func.isRequired,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu
            setQuizData={setQuizData}
            openSideMenu={openSideMenu}
            setOpenSideMenu={setOpenSideMenu}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Generate a Quiz!
          </Typography>

          <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
