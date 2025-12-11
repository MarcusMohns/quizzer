import "./AnimatedCogwheel.css";
import Box from "@mui/material/Box";

const CogWheel = ({ style }: { style: React.CSSProperties }) => {
  return (
    <Box
      className="cogwheel"
      sx={{
        ...style,
        display: "inline-block",
        borderRadius: "100%",
        boxSizing: "border-box",
        position: "relative",
        textAlign: "center",
        zIndex: 1,
        width: "100px",
        height: "100px",

        "&::before": {
          content: '""',
          position: "absolute",
          boxSizing: "border-box",
          borderRadius: "100%",
          left: "-15px",
          top: "-15px",
          width: "110px",
          height: "110px",
          border: "6px dashed",
        },
        "&::after": {
          content: '"+"',
          position: "absolute",
          fontFamily: "arial",
          boxSizing: "border-box",
          zIndex: 0,
          left: "-0.93rem",
          top: "-4.2rem",
          fontSize: "11rem",
          width: "110px",
          height: "110px",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          borderRadius: "100%",
          display: "inline-block",
          backgroundColor: "#44403f",
          position: "relative",
          zIndex: 10,
          width: "20px",
          height: "20px",
          marginTop: "30px",
          border: "5px solid",
        }}
      />
    </Box>
  );
};
const AnimatedCogwheel = () => {
  return (
    <Box
      className="cogwheel-container"
      sx={{
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <CogWheel
        style={{
          color: "#f5b9bd",
          border: "10px solid #f5b9bd",
          verticalAlign: "35px",
          animation: "spin-to-r 4s infinite linear",
        }}
      />
      <CogWheel
        style={{
          color: "#e75152",
          border: "10px solid #e75152",
          verticalAlign: "20px",
          animation: "spin-to-l 4s infinite linear",
        }}
      />
      <CogWheel
        style={{
          verticalAlign: "40px",
          color: "#9f9e9e",
          marginTop: "-7px",
          border: "10px solid #9f9e9e",
          animation: "spin-to-r 4s infinite linear",
        }}
      />
    </Box>
  );
};

export default AnimatedCogwheel;
