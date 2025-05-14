import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import Zoom from "@mui/material/Zoom";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },

  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(105, 133, 150, 0.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#394b59",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#677ec2,#677ec2, 43%,transparent 10%)",
    content: '""',
  },
});

const StyledRadio = (props: React.ComponentProps<typeof Radio>) => {
  return (
    <Radio
      disableRipple
      checkedIcon={
        <Zoom in={true} timeout={100}>
          <BpCheckedIcon />
        </Zoom>
      }
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default StyledRadio;
