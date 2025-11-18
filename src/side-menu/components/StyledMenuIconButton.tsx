import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface StyledMenuIconButtonProps {
  handleSideMenuOpen: (
    open: boolean,
    event?: React.MouseEvent | React.KeyboardEvent
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
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={() => handleSideMenuOpen(open)}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default StyledMenuIconButton;
