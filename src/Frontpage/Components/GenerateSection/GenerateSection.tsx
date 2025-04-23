import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import { Refs, VisibleStates } from "../../store";

interface CardsSectionInterface {
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
}: CardsSectionInterface) => {
  return (
    <Box
      ref={(el) => {
        refs.current[3] = el as HTMLElement;
      }}
      component="section"
      id="generate-section"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "row",
          width: "49%",
          height: "100%",
          backgroundPosition: "center",
          backgroundImage: "url(/svgs/icon-grid.svg)",
          backgroundRepeat: "no-repeat",
          m: 5,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", lg: "50%" },
          m: { xs: 0, lg: 5 },
        }}
      >
        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "200ms" }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "50%",
                textAlign: "center",
                justifyContent: "center",
              },
            }}
          >
            <Typography fontSize="4rem">💻 🌍</Typography>
            <Typography
              id="existing-quiz-header"
              sx={{
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
