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

const WAVY_MASK = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60 C75,95 225,95 300,60 C375,25 525,25 600,60 C675,95 825,95 900,60 C975,25 1125,5 1200,60 V120 H0 Z" fill="black"/></svg>')`;
const FLATTER_WAVY_MASK = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60 C75,75 225,75 300,60 C375,45 525,45 600,60 C675,75 825,75 900,60 C975,45 1125,45 1200,60 V120 H0 Z" fill="black"/></svg>')`;

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
        pb: { xs: 10, md: 20 },
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "background.default" : "#7094fd",
        position: "relative",
      }}
    >
      {/* Divider box giving the Card & Generate section a rounded transition  */}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          position: "relative",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "background.default" : "#7094fd",
          top: "-100px",
          maskImage: { xs: FLATTER_WAVY_MASK, md: WAVY_MASK },
          WebkitMaskImage: { xs: FLATTER_WAVY_MASK, md: WAVY_MASK },
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
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
          <Box
            sx={{ position: "relative", display: "inline-block", mb: 4, mx: 3 }}
          >
            <Typography
              id="existing-quiz-header"
              variant="h2"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? `linear-gradient(180deg, #4fc3f7 0%, ${theme.palette.info.main} 50%, ${theme.palette.primary.main} 100%)`
                    : `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                // Optimized glow for light mode legibility
                textShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0px 4px 15px rgba(0, 188, 212, 0.2)"
                    : `0px 0px 3px #ffa629`,
                letterSpacing: "0.02em",
                // Gentle floating animation to make the text feel buoyant
                animation: "buoyancy 4s infinite ease-in-out",
                "@keyframes buoyancy": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-8px)" },
                },
              }}
            >
              ...or pick a ready-made quiz
            </Typography>

            {/* Floating Bubbles */}
            {[
              { s: 14, l: "103%", d: "0s", x: 10 },
              { s: 12, l: "108%", d: "1.5s", x: -15 },
              { s: 20, l: "100%", d: "3s", x: 20 },
            ].map((b, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  // Positioned above the text on mobile, at the end of text on desktop
                  bottom: { xs: "100%", md: "10px" },
                  left: { xs: "50%", md: b.l },
                  marginLeft: { xs: `${b.x}px`, md: 0 },
                  width: b.s,
                  height: b.s,
                  borderRadius: "50%",
                  border: (theme) =>
                    `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(255,255,255,0.7)"
                    }`,
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.3)",
                  animation: `bubbleRise 5s infinite ease-in ${b.d}`,
                  pointerEvents: "none",
                  "@keyframes bubbleRise": {
                    "0%": {
                      transform: "translateY(0) translateX(0) scale(0.5)",
                      opacity: 0,
                    },
                    "20%": { opacity: 0.6 },
                    "50%": {
                      transform: `translateY(-60px) translateX(${b.x}px) scale(1)`,
                    },
                    "100%": {
                      transform: `translateY(-150px) translateX(${
                        b.x * -0.5
                      }px) scale(1.3)`,
                      opacity: 0,
                    },
                  },
                }}
              />
            ))}
          </Box>

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
