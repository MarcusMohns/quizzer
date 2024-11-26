import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import QuizSelectForm from "./QuizSelectForm";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function SideMenu({ setQuizData }) {
  SideMenu.propTypes = {
    setQuizData: PropTypes.array.isRequired,
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
  StyledMenuIconButton.propTypes = {
    bool: PropTypes.bool.isRequired,
  };

  return (
    <div>
      <StyledMenuIconButton bool={true} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
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
            Quizzer
          </Typography>
        </Box>
        <QuizSelectForm setQuizData={setQuizData} />
      </Drawer>
    </div>
  );
}
