import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Refs, VisibleStates } from "../../store";

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
          width: "100%",
          height: "100%",
          backgroundImage: "url(/svgs/cloudy.svg)",
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
          width: { sm: "100%", md: "50%" },
          mt: { xs: 5, md: 20 },
        }}
      >
        <Slide
          in={visibleStates["generate-section"]}
          container={refs.current[3]}
          timeout={600}
          style={{ transitionDelay: "200ms" }}
        >
          <Typography
            id="generate-section-header"
            sx={{
              width: { xs: "100%", lg: "50%" },
              textAlign: "center",
              zIndex: 0,
            }}
            variant="h4"
          >
            Generate a quiz selecting your preferred category and difficulty!
          </Typography>
        </Slide>

        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "600ms" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Button
              id="generate-quiz-button"
              color="warning"
              size="large"
              variant="outlined"
              sx={{ my: 3 }}
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
                variant="body2"
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
