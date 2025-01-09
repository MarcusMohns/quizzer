import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Fade from "@mui/material/Fade";

export const WelcomeSection = ({
  refs,
  visibleStates,
  setOpenSideMenu,
  handleScroll,
}) => {
  return (
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
          <Typography sx={{ textAlign: "center" }} variant="h3" component="h3">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              iusto eius autem incidunt accusamus odio debitis, iste sunt culpa
              officia. Repellendus voluptas iusto debitis animi doloremque
              dolorem modi voluptatem iste?
            </Typography>
            <Box
              component="img"
              src="/images/question-mark.png"
              loading="lazy"
              sx={{ height: "160px", width: "160px" }}
            />
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => setOpenSideMenu(true)}
                color="secondary"
                variant="contained"
                endIcon={<MenuIcon />}
                sx={{ fontWeight: "bold" }}
              >
                Generate a quiz
              </Button>
              <Button
                onClick={handleScroll}
                color="secondary"
                variant="outlined"
                endIcon={<KeyboardDoubleArrowDownIcon />}
                sx={{ fontWeight: "bold" }}
              >
                Pick a Quiz
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
};

export default WelcomeSection;
