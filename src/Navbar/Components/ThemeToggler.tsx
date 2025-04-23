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
        p: { xs: 0, sm: 2 },
      }}
      direction="row"
    >
      <Typography
        sx={{
          display: { xs: "none", sm: "flex" },
          fontSize: { xs: "12px", sm: "initial" },
          textAlign: "center",
        }}
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
          display: { xs: "none", sm: "flex" },
          fontSize: { xs: "12px", sm: "initial" },
          textAlign: "center",
        }}
      >
        Dark
      </Typography>
    </Stack>
  );
};

export default ThemeToggler;
