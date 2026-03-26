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
        pb: 10,
        backgroundColor: "background.default",
        position: "relative",
      }}
    >
      {/* Divider box giving the Card & Generate section a rounded transition  */}
      <Box
        sx={{
          width: "100%",
          height: "80px",
          borderRadius: { xs: "0%", md: "100%" },
          position: "relative",
          backgroundColor: "background.default",
          top: "-37px",
        }}
      />
      <Fade in={visibleStates["quiz-cards-container"]} timeout={500}>
        <Box
          ref={registerRef}
          id="quiz-cards-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 4,
          }}
        >
          <Typography
            id="existing-quiz-header"
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 4,
              mx: 3,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.info.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            ...or pick a ready-made quiz
          </Typography>

          <Box
            id="quiz-cards"
            ref={registerRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
              p: { xs: 3, md: 8 },
              width: { xs: "95%", lg: "90%" },
            }}
          >
            {preparedQuizzes.map((quiz, index) => (
              <QuizCard
                key={quiz.category}
                description={quiz.description}
                image={quiz.image}
                icon={quiz.icon}
                header={quiz.category}
                questions={quiz.questions}
                handleSetQuizData={handleSetQuizData}
                index={index}
                visible={visibleStates["quiz-cards-container"]}
              />
            ))}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default CardsSection;
