import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

const fall = keyframes`
  from { transform: translateY(-45px) rotate(-25deg); opacity: 0; }
  50% { opacity: 1; }
  to { transform: translateY(45px) rotate(-25deg); opacity: 0; }
`;

const splash = keyframes`
  0%, 80% { transform: scale(0); opacity: 0; }
  81% { transform: scale(0); opacity: 1; }
  90% { transform: scale(1.5, 0.5); opacity: 0.6; }
  100% { transform: scale(2.5, 0.8); opacity: 0; }
`;

const DrizzleAnimation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120px",
        gap: 8,
        overflow: "hidden",
        transform: "rotate(12deg)",
        width: "100%",
      }}
    >
      {[...Array(5)].map((_, i) => {
        const duration = `${1 + i * 0.1}s`;
        const delay = `${i * 0.15}s`;

        return (
          <Box
            key={i}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* Raindrop */}
            <Box
              sx={{
                width: "10px",
                height: "45px",
                background: (theme) =>
                  `linear-gradient(to bottom, transparent, ${theme.palette.secondary.dark})`,
                borderRadius: "4px 4px 25px 25px",
                animation: `${fall} ${duration} infinite linear`,
                animationDelay: delay,
              }}
            />
            {/* Splash Ripple */}
            <Box
              sx={{
                position: "absolute",
                bottom: "15px",
                width: "20px",
                height: "10px",
                backgroundColor: (theme) => theme.palette.secondary.dark,
                borderRadius: "50%",
                animation: `${splash} ${duration} infinite linear`,
                animationDelay: delay,
                pointerEvents: "none",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default DrizzleAnimation;
