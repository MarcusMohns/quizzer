import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface StyledMenuIconButtonProps {
  handleSideMenuOpen: (
    open: boolean,
    event?: React.MouseEvent | React.KeyboardEvent,
  ) => void;
  open: boolean;
}
const StyledMenuIconButton = ({
  handleSideMenuOpen,
  open,
}: StyledMenuIconButtonProps) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label={open ? "close menu" : "open menu"}
      sx={{ mr: 2 }}
      onClick={(e) => handleSideMenuOpen(!open, e)}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default StyledMenuIconButton;
