import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Fade from "@mui/material/Fade";
import { Refs, VisibleStates } from "../store";

interface WelcomeSectionInterface {
  visibleStates: VisibleStates;
  refs: Refs;
  scrollRef: Refs;
  handleScroll: (idx: number) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
}

const WelcomeSection = ({
  refs,
  visibleStates,
  handleSideMenuOpen,
  handleScroll,
  scrollRef,
}: WelcomeSectionInterface) => {
  return (
    <Box
      ref={(el) => {
        scrollRef.current[0] = el as HTMLElement;
      }}
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        minHeight: "100%",
        height: { xs: "100vh", md: "93vh" },
        backgroundImage: "url(images/cloudy.svg)",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        zIndex: 10,
      }}
    >
      <Box sx={{ width: { sm: "100%", md: "50%" }, mt: { xs: 5, md: 10 } }}>
        <Fade in={visibleStates["welcome-message"]} timeout={500}>
          <Stack
            id="welcome-message"
            ref={(el) => {
              refs.current[0] = el as HTMLElement;
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="overline">
              Good Quizzing
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h2"
              component="h1"
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
            ref={(el) => {
              refs.current[1] = el as HTMLElement;
            }}
            id="welcome-box"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              <Fade
                in={visibleStates["welcome-box"]}
                timeout={400}
                style={{ transitionDelay: "300ms" }}
              >
                <Typography sx={{ textAlign: "center" }} variant="body1">
                  Welcome to Quizzer, your ultimate destination for fun and
                  challenging quizzes! Whether you're looking to test your
                  knowledge, learn something new, or just have a good time,
                  we've got a quiz for you. Dive in and start quizzing now!
                </Typography>
              </Fade>

              <Fade
                in={visibleStates["welcome-box"]}
                timeout={600}
                style={{ transitionDelay: "500ms" }}
              >
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <Button
                    onClick={() => handleSideMenuOpen(true)}
                    color="warning"
                    variant="contained"
                    endIcon={<MenuIcon />}
                    sx={{ fontWeight: "bold" }}
                    size="large"
                  >
                    Generate a quiz
                  </Button>
                  <Button
                    // handleScroll(1) refers to the index of the scrollRef we want to scroll (scrollRefs[1] in this case is the CardsSection)
                    onClick={() => handleScroll(1)}
                    color="warning"
                    variant="outlined"
                    endIcon={<KeyboardDoubleArrowDownIcon />}
                    sx={{ fontWeight: "bold" }}
                    size="large"
                  >
                    Pick an existing Quiz
                  </Button>
                </Stack>
              </Fade>
            </Stack>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default WelcomeSection;
