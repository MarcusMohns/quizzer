import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import ThemeToggler from "./components/ThemeToggler.tsx";
import SideMenu from "../SideMenu/SideMenu.tsx";
import { QuizState } from "../store.tsx";

interface NavbarProps {
  handleSetDarkMode: () => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
  handleSetQuizData: (data: QuizState | null) => void;
  darkMode: boolean;
  sideMenuOpen: boolean;
}

export default function Navbar({
  handleSetDarkMode,
  handleSideMenuOpen,
  handleSetQuizData,
  darkMode,
  sideMenuOpen,
}: NavbarProps) {
  const resetQuizData = () => {
    handleSetQuizData(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "primary",
        }}
      >
        <Toolbar>
          <SideMenu
            handleSideMenuOpen={handleSideMenuOpen}
            sideMenuOpen={sideMenuOpen}
            handleSetQuizData={handleSetQuizData}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
            onClick={resetQuizData}
          >
            🐦 Quizzer
          </Typography>

          <ThemeToggler
            darkMode={darkMode}
            handleSetDarkMode={handleSetDarkMode}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
