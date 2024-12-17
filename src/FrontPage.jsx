import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import useElementOnScreen from "./Utils/useElementOnScreen";
import QuizCard from "./Components/QuizCard";
import { preparedQuizzes } from "./Utils/preparedQuizzes";
import PropTypes from "prop-types";

const FrontPage = ({ setQuizData, setOpenSideMenu }) => {
  const [refs, visibleStates] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  FrontPage.propTypes = {
    setQuizData: PropTypes.func.isRequired,
    setOpenSideMenu: PropTypes.func.isRequired,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
        mt: 1,
      }}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%" },
          height: "100vh",
        }}
      >
        <Fade in={visibleStates["welcome-message"]} timeout={500}>
          <Stack id="welcome-message" ref={(el) => (refs.current[0] = el)}>
            <Typography
              sx={{ textAlign: "center", mt: "10%" }}
              variant="overline"
            >
              Good Quizzing
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h4"
              component="h4"
            >
              Welcome to Quizzer
            </Typography>
          </Stack>
        </Fade>
        <Fade
          in={visibleStates["welcome-box"]}
          timeout={900}
          style={{ transitionDelay: "200ms" }}
        >
          <Box
            ref={(el) => (refs.current[1] = el)}
            id="welcome-box"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              width: "75%",
              mt: 5,
            }}
          >
            <Stack
              spacing={2}
              direction="column"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 5,
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita iusto eius autem incidunt accusamus odio debitis, iste
                sunt culpa officia. Repellendus voluptas iusto debitis animi
                doloremque dolorem modi voluptatem iste?
              </Typography>
              <Button
                onClick={() => setOpenSideMenu(true)}
                variant="contained"
                endIcon={<MenuIcon />}
                sx={{ fontWeight: "bold" }}
              >
                Generate a quiz
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Box>
      <Box
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
              ... or find an existing quiz in our list of quizs!
            </Typography>

            <Fade
              in={visibleStates["quiz-cards-container"]}
              timeout={700}
              style={{ transitionDelay: "700ms" }}
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
      <Box
        component="section"
        sx={{
          width: { xs: "100%" },
          height: "100vh",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h2" component="h2">
          Welcome to Quizzer!
        </Typography>
      </Box>
    </Box>
  );
};

export default FrontPage;
