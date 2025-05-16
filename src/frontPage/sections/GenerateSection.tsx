import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Refs, VisibleStates } from "../store";

interface GenerateSectionInterface {
  visibleStates: VisibleStates;
  refs: Refs;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
}

const GenerateSection = ({
  refs,
  visibleStates,
  handleSideMenuOpen,
}: GenerateSectionInterface) => {
  return (
    <Box
      ref={(el) => {
        refs.current[3] = el as HTMLElement;
      }}
      component="section"
      id="generate-section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        height: "100vh",
        width: "100%",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/cloudy.svg)",
          transform: "scaleY(-1)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: { sm: "100%", md: "50%" },
          mt: 20,
          mx: 2,
        }}
      >
        <Slide
          in={visibleStates["generate-section"]}
          container={refs.current[3]}
          timeout={1000}
          style={{ transitionDelay: "300ms" }}
        >
          <Box>
            <Typography
              id="generate-section-header"
              sx={{
                textAlign: "center",
                zIndex: 0,
              }}
              variant="h4"
            >
              Generate a quiz!
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Select different categories, difficulty and quantity
            </Typography>
          </Box>
        </Slide>

        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "900ms" }}
        >
          <Box sx={{ textAlign: "center", my: 3 }}>
            <Button
              id="generate-quiz-button"
              color="warning"
              size="large"
              variant="outlined"
              sx={{ my: 2, boxShadow: 2 }}
              onClick={() => handleSideMenuOpen(true)}
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
                variant="subtitle2"
                color="warning"
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
