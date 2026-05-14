import FlashOnIcon from "@mui/icons-material/FlashOn";
import { keyframes } from "@mui/system";

const flicker = keyframes`
  0% { opacity: 0; transform: rotate(-35deg) translateY(20px); filter: none; }
  1% { opacity: 1; transform: rotate(-35deg) translateY(20px); filter: drop-shadow(0 0 30px #fff) drop-shadow(0 0 50px #ffd700); }
  2% { opacity: 0.3; transform: rotate(-35deg) translateY(20px); filter: drop-shadow(0 0 10px #ffd700); }
  3% { opacity: 1; transform: rotate(-35deg) translateY(20px); filter: drop-shadow(0 0 30px #fff) drop-shadow(0 0 60px #ffd700); }
  5%, 90% { 
    opacity: 1; 
    transform: rotate(-35deg) translateY(20px); 
    filter: drop-shadow(0 0 25px #ffd700) drop-shadow(0 0 40px #ff8c00); 
  }
  100% { opacity: 0; transform: rotate(-35deg) translateY(20px); filter: none; }
`;

const LightningAnimation = () => {
  return (
    <FlashOnIcon
      sx={{
        fontSize: "12rem",
        color: "#ffd700",
        opacity: 0,
        transform: "rotate(-35deg) translateY(20px)",
        animation: `${flicker} 12s infinite`,
        animationDelay: "1.5s",
        animationFillMode: "backwards",
      }}
    />
  );
};

export default LightningAnimation;
