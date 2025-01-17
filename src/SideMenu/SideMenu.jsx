import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import GenerateQuizSkeleton from "./Components/GenerateQuizSkeleton.jsx";

const GenerateQuizForm = lazy(() =>
  import("./Components/GenerateQuizForm/GenerateQuizForm.jsx")
);

export default function SideMenu({
  setQuizData,
  openSideMenu,
  setOpenSideMenu,
}) {
  const toggleDrawer = (newOpen) => () => {
    setOpenSideMenu(newOpen);
  };

  const StyledMenuIconButton = ({ bool }) => (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={toggleDrawer(bool)}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <Box>
      <StyledMenuIconButton bool={true} />
      <Drawer
        open={openSideMenu}
        onClose={toggleDrawer(false)}
        aria-hidden="false"
        PaperProps={{
          sx: { backgroundColor: "secondary.sidemenu" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
            minHeight: "64px",
          }}
        >
          <StyledMenuIconButton bool={false} />
          <Typography variant="h6" component="div">
            🐦Quizzer
          </Typography>
        </Box>
        <Suspense fallback={<GenerateQuizSkeleton />}>
          <GenerateQuizForm
            setQuizData={setQuizData}
            setOpenSideMenu={setOpenSideMenu}
          />
        </Suspense>
      </Drawer>
    </Box>
  );
}
