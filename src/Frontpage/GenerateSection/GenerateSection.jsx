import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";

const GenerateSection = ({ refs, visibleStates, setOpenSideMenu }) => {
  return (
    <Box
      ref={(el) => (refs.current[3] = el)}
      component="section"
      id="generate-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" },
        minHeight: "50vh",
        height: { xs: "100vh", sm: "70vh" },
        py: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "200ms" }}
        >
          <Box>
            <Typography fontSize="4rem" sx={{ textAlign: "center" }}>
              💻 🌍
            </Typography>
            <Typography
              id="existing-quiz-header"
              sx={{
                textAlign: "center",
                width: "100%",
              }}
              variant="h5"
            >
              Generate a quiz selecting your preferred category and difficulty!
            </Typography>
          </Box>
        </Fade>

        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "400ms" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Button
              id="generate-quiz-button"
              color="secondary"
              size="large"
              variant="outlined"
              sx={{ my: 3, color: "secondary.light" }}
              onClick={() => setOpenSideMenu(true)}
              endIcon={<MenuIcon />}
            >
              Generate Quiz
            </Button>
            <Typography
              id="generate-section-text"
              sx={{
                fontSize: "0.9rem",
              }}
            >
              Quizzer uses{" "}
              <Link
                href="https://the-trivia-api.com/docs/v2/"
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
              >
                the-trivia-api
              </Link>{" "}
              to generate quizzes
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default GenerateSection;
