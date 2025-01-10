import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { preparedQuizzes } from "../../Utils/preparedQuizzes";
import QuizCard from "./QuizCard";

const CardsSection = ({ visibleStates, refs, setQuizData, scrollRef }) => {
  return (
    <Box
      ref={(el) => (scrollRef.current[1] = el)}
      component="section"
      sx={{
        width: { xs: "100%" },
        minHeight: "100vh",
        pt: 5,
      }}
    >
      <Fade in={visibleStates["quiz-cards-container"]} timeout={500}>
        <Box ref={(el) => (refs.current[2] = el)} id="quiz-cards-container">
          <Typography
            id="existing-quiz-header"
            sx={{
              textAlign: "center",
              fontFamily: "monospace",
              width: "100%",
            }}
            variant="h5"
          >
            ... or find an existing quiz in our list of quizzes!
          </Typography>

          <Fade
            in={visibleStates["quiz-cards-container"]}
            timeout={500}
            style={{ transitionDelay: "500ms" }}
          >
            <Box
              id="quiz-cards"
              ref={(el) => (refs.current[3] = el)}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                p: 5,
              }}
            >
              {preparedQuizzes.map((quiz) => (
                <QuizCard
                  key={quiz.category}
                  text={quiz.text}
                  image={quiz.image}
                  header={quiz.category}
                  questions={quiz.questions}
                  setQuizData={setQuizData}
                />
              ))}
            </Box>
          </Fade>
        </Box>
      </Fade>
    </Box>
  );
};

export default CardsSection;
