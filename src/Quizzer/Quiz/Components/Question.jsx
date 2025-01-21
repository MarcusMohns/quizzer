import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";

const Question = ({ questionData, activeStep }) => {
  return (
    <Fade in={true} appear={true} timeout={800} key={questionData.id}>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            alignSelf: { xs: "center", md: "flex-start" },
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
