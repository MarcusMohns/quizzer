import "./AnimatedSquares.css";
import Box from "@mui/material/Box";

const Square = ({ style }: { style: React.CSSProperties }) => {
  return (
    <Box
      className="square"
      sx={{
        ...style,
        position: "absolute",
        backgroundColor: "secondary.dark",
        bottom: "-150px",
        listStyle: "none",
      }}
    />
  );
};

const squares = [
  {
    left: "20%",
    width: "111px",
    height: "111px",
    animation: "animate 33s linear 2s infinite",
  },
  {
    left: "33%",
    width: "20px",
    height: "20px",
    animation: "animate 22s linear 0s infinite",
  },
  {
    left: "88%",
    width: "20px",
    height: "20px",
    animation: "animate 15s linear 0s infinite",
  },
  {
    left: "75%",
    width: "90px",
    height: "90px",
    animation: "animate 25s linear 1s infinite",
  },
  {
    left: "70%",
    width: "20px",
    height: "20px",
    animation: "animate 18s linear 0s infinite",
  },
  {
    left: "11%",
    width: "20px",
    height: "20px",
    animation: "animate 15s linear 0s infinite",
  },
  {
    left: "40%",
    width: "20px",
    height: "20px",
    animation: "animate 25s linear 0s infinite",
  },
  {
    left: "28%",
    width: "20px",
    height: "20px",
    animation: "animate 17s linear 0s infinite",
  },
  {
    left: "88%",
    width: "120px",
    height: "120px",
    animation: "animate 35s linear 3s infinite",
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
