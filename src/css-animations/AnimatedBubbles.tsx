import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

const animateBubbles = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
`;

const bubbleWobble = keyframes`
  from { margin-left: -15px; }
  to { margin-left: 15px; }
`;

interface BubbleProps {
  left: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
}

const Bubble = ({ style }: { style: BubbleProps }) => {
  return (
    <Box
      className="bubble"
      sx={{
        left: style.left,
        width: style.width,
        height: style.height,
        // Combine the rising animation with the horizontal wobble
        animation: `${animateBubbles} ${style.duration} linear ${style.delay} infinite, ${bubbleWobble} 4s ease-in-out infinite alternate`,
        position: "absolute",
        // Translucent background with a slight tint
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(87, 159, 228, 0.82)",
        // Glassy border
        border: "1px solid rgba(255, 255, 255, 0.3)",
        // Inset shadows create a 3D spherical look
        boxShadow:
          "inset -5px -5px 12px rgba(0, 0, 0, 0.1), inset 5px 5px 12px rgba(255, 255, 255, 0.3)",
        bottom: "-150px",
        listStyle: "none",
        borderRadius: "50%",
        // Reflection shine/highlight
        "&::after": {
          content: '""',
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "25%",
          height: "25%",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.6)",
          filter: "blur(1px)",
        },
      }}
    />
  );
};

const bubbles = [
  {
    left: "33%",
    width: "20px",
    height: "20px",
    duration: "22s",
    delay: "0s",
  },
  {
    left: "88%",
    width: "20px",
    height: "20px",
    duration: "15s",
    delay: "0s",
  },
  {
    left: "75%",
    width: "45px",
    height: "45px",
    duration: "25s",
    delay: "1s",
  },
  {
    left: "70%",
    width: "20px",
    height: "20px",
    duration: "18s",
    delay: "0s",
  },
  {
    left: "11%",
    width: "28px",
    height: "28px",
    duration: "15s",
    delay: "0s",
  },
  {
    left: "40%",
    width: "11px",
    height: "11px",
    duration: "25s",
    delay: "0s",
  },
  {
    left: "28%",
    width: "20px",
    height: "20px",
    duration: "17s",
    delay: "0s",
  },
  {
    left: "88%",
    width: "30px",
    height: "30px",
    duration: "35s",
    delay: "3s",
  },
];

const AnimatedBubbles = () => {
  return (
    <Box
      className="bg-animated-bubbles"
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      {[...Array(bubbles.length)].map((_, index) => (
        <Bubble key={index} style={bubbles[index]} />
      ))}
    </Box>
  );
};

export default AnimatedBubbles;
