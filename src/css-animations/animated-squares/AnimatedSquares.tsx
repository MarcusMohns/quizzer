import "./AnimatedSquares.css";
import Box from "@mui/material/Box";

const Square = ({ style }: { style: React.CSSProperties }) => {
  return (
    <Box
      className="square"
      sx={{
        ...style,
        // Combine the rising animation with the horizontal wobble
        animation: `${style.animation}, bubble-wobble 4s ease-in-out infinite alternate`,
        position: "absolute",
        // Translucent background with a slight tint
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0.2)",
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

const squares = [
  {
    left: "33%",
    width: "20px",
    height: "20px",
    animation: "animate-squares 22s linear 0s infinite",
  },
  {
    left: "88%",
    width: "20px",
    height: "20px",
    animation: "animate-squares 15s linear 0s infinite",
  },
  {
    left: "75%",
    width: "45px",
    height: "45px",
    animation: "animate-squares 25s linear 1s infinite",
  },
  {
    left: "70%",
    width: "20px",
    height: "20px",
    animation: "animate-squares 18s linear 0s infinite",
  },
  {
    left: "11%",
    width: "28px",
    height: "28px",
    animation: "animate-squares 15s linear 0s infinite",
  },
  {
    left: "40%",
    width: "11px",
    height: "11px",
    animation: "animate-squares 25s linear 0s infinite",
  },
  {
    left: "28%",
    width: "20px",
    height: "20px",
    animation: "animate-squares 17s linear 0s infinite",
  },
  {
    left: "88%",
    width: "30px",
    height: "30px",
    animation: "animate-squares 35s linear 3s infinite",
  },
];

const AnimatedSquares = () => {
  return (
    <Box
      className="bg-animated-squares"
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      {[...Array(squares.length)].map((_, index) => (
        <Square key={index} style={squares[index]} />
      ))}
    </Box>
  );
};

export default AnimatedSquares;
