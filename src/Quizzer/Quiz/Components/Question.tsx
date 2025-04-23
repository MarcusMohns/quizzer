import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import { QuizQuestion } from "../../../store";

interface QuestionProps {
  questionData: QuizQuestion;
  activeStep: number;
}

const Question = ({ questionData, activeStep }: QuestionProps) => {
  return (
    <Fade in={true} appear={true} timeout={800} key={questionData.id}>
      <Typography
        variant="h5"
        sx={{
          minHeight: "100px",
          mb: { xs: 5, md: 2 },
          display: { xs: "flex", md: "ruby" },
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            alignSelf: "center",
            ml: { xs: "0", md: "auto" },
            mr: 1,
            bgcolor: "primary.main",
            color: "primary.contrastText",
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
