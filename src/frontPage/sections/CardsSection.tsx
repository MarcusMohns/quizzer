import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { preparedQuizzes } from "../store.tsx";
import QuizCard from "../components/QuizCard.tsx";
import { VisibleStates, Refs } from "../store.tsx";
import { QuizState } from "../../store.tsx";

interface CardsSectionInterface {
  visibleStates: VisibleStates;
  refs: Refs;
  scrollRef: Refs;
  handleSetQuizData: (data: QuizState | null) => void;
}

const CardsSection = ({
  visibleStates,
  refs,
  handleSetQuizData,
  scrollRef,
}: CardsSectionInterface) => {
  return (
    <Box
      ref={(el) => {
        scrollRef.current[1] = el as HTMLElement;
      }}
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
        <Box
          ref={(el) => {
            refs.current[4] = el as HTMLElement;
          }}
          id="quiz-cards-container"
        >
          <Typography
            id="existing-quiz-header"
            sx={{
              textAlign: "center",
              width: "100%",
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
              ref={(el) => {
                refs.current[5] = el as HTMLElement;
              }}
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
                  image={quiz.smallerImage}
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
