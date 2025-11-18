import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { QuizQuestion } from "../../../store";

interface QuestionProps {
  questionData: QuizQuestion;
  activeStep: number;
}

const Question = ({ questionData, activeStep }: QuestionProps) => {
  return (
    <Fade in={true} appear={true} timeout={800} key={questionData.id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          minHeight: "100px",
          mb: { xs: 4, md: 1 },
          mt: 1,
          textAlign: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 0.5,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            alignSelf: "top",
          }}
        >
          {activeStep + 1}
        </Avatar>
        <Typography variant="h6">{questionData.question.text}</Typography>
      </Box>
    </Fade>
  );
};

export default Question;
