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
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
          mb: 4,
          px: 2,
          zIndex: 1,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            width: 48,
            height: 48,
            mr: { xs: 0, md: 1 },
            mb: { xs: 2, md: 0 },
            boxShadow: 3,
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          {activeStep + 1}
        </Avatar>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontWeight: "bold",
            lineHeight: 1.3,
          }}
        >
          {questionData.question.text}
        </Typography>
      </Box>
    </Fade>
  );
};

export default Question;
