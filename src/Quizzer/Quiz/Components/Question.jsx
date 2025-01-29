import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";

const Question = ({ questionData, activeStep }) => {
  return (
    <Fade in={true} appear={true} timeout={800} key={questionData.id}>
      <Typography
        variant="h5"
        sx={{
          display: "ruby",
          textAlign: "center",
          minHeight: "100px",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            alignSelf: "center",
            ml: { xs: "0", md: "auto" },
            mr: 1,
          }}
        >
          {activeStep + 1}
        </Avatar>
        {questionData.question.text}
      </Typography>
    </Fade>
  );
};

export default Question;
