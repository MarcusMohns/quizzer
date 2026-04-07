import { memo } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

interface CelestialBodyProps {
  isDarkMode: boolean;
}

const CelestialBody = ({ isDarkMode }: CelestialBodyProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: 10, md: 40 },
        right: { xs: 20, md: 80 },
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          opacity: 0.6,
          color: isDarkMode ? "grey.100" : "warning.main",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: isDarkMode
            ? "drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))"
            : "drop-shadow(0 0 30px rgba(255, 255, 255, 0.2))",
          "&:hover": {
            transform: "scale(1.05) rotate(12deg)",
            opacity: 1,
          },
        }}
      >
        {isDarkMode ? (
          <Zoom in={isDarkMode} timeout={600} unmountOnExit>
            <Brightness2Icon sx={{ fontSize: { xs: "5rem", md: "10rem" } }} />
          </Zoom>
        ) : (
          <Zoom in={!isDarkMode} timeout={600} unmountOnExit>
            <WbSunnyIcon sx={{ fontSize: { xs: "5rem", md: "10rem" } }} />
          </Zoom>
        )}
      </Box>
    </Box>
  );
};

export default memo(CelestialBody);
