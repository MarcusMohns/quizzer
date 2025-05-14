import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { MaterialUISwitch } from "./MaterialUISwitch";

interface ThemeTogglerProps {
  darkMode: boolean;
  handleSetDarkMode: (darkMode: boolean) => void;
}

const ThemeToggler = ({ darkMode, handleSetDarkMode }: ThemeTogglerProps) => {
  const toggleDarkMode = () => {
    handleSetDarkMode(!darkMode);
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-end" },
        px: { xs: 0, sm: 2 },
      }}
      direction="row"
    >
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontSize: { xs: "12px", sm: "initial" },
          textAlign: "center",
        }}
        variant="body2"
      >
        Light
      </Typography>
      <MaterialUISwitch
        onChange={toggleDarkMode}
        slotProps={{ input: { "aria-label": "darkmode-toggle" } }}
        checked={darkMode}
        name={"theme-toggle"}
      />
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontSize: { xs: "12px", sm: "initial" },
          textAlign: "center",
        }}
        variant="body2"
      >
        Dark
      </Typography>
    </Stack>
  );
};

export default ThemeToggler;
