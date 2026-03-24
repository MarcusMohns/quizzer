import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { preparedQuizzes } from "../store.tsx";
import { VisibleStates } from "../store.tsx";
import { QuizState } from "../../store.tsx";
import QuizCard from "../components/QuizCard.tsx";

interface CardsSectionInterface {
  visibleStates: VisibleStates;
  registerRef: (node: HTMLElement | null) => void;
  setScrollRef: (node: HTMLElement | null) => void;
  handleSetQuizData: (data: QuizState | null) => void;
}

const CardsSection = ({
  visibleStates,
  registerRef,
  handleSetQuizData,
  setScrollRef,
}: CardsSectionInterface) => {
  return (
    <Box
      ref={setScrollRef}
      component="section"
      sx={{
        width: { xs: "100%" },
        minHeight: "100vh",
      }}
    >
      {/* Divider box giving the Card & Generate section a rounded transition  */}
      <Box
        sx={{
          width: "100%",
          height: "70px",
          borderRadius: { xs: "0%", md: "100%" },
          position: "relative",
          backgroundColor: "background.default",
          top: "-37px",
        }}
      />
      <Fade in={visibleStates["quiz-cards-container"]} timeout={500}>
        <Box ref={registerRef} id="quiz-cards-container">
          <Typography
            id="existing-quiz-header"
            sx={{
              textAlign: "center",
              mx: 3,
            }}
            variant="h4"
          >
            ...or find an existing quiz in our list of quizzes!
          </Typography>

          <Fade
            in={visibleStates["quiz-cards-container"]}
            timeout={500}
            style={{ transitionDelay: "500ms" }}
          >
            <Box
              id="quiz-cards"
              ref={registerRef}
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
                  description={quiz.description}
                  image={quiz.image}
                  icon={quiz.icon}
                  header={quiz.category}
                  questions={quiz.questions}
                  handleSetQuizData={handleSetQuizData}
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
