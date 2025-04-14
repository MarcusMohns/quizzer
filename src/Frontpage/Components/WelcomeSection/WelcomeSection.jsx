import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Fade from "@mui/material/Fade";

const WelcomeSection = ({
  refs,
  visibleStates,
  setOpenSideMenu,
  handleScroll,
  scrollRef,
}) => {
  return (
    <Box
      ref={(el) => (scrollRef.current[0] = el)}
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        minHeight: "100%",
        height: "92vh",
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='560' preserveAspectRatio='none' viewBox='0 0 1920 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3cpath d='M2080 560L0 560 L0 400.02Q75.06 315.08%2c 160 390.15Q186.51 320.66%2c 256 347.17Q285.44 280.62%2c 352 310.06Q412.86 274.92%2c 448 335.78Q523.56 315.34%2c 544 390.9Q610.25 297.14%2c 704 363.39Q722.38 285.77%2c 800 304.15Q855.4 263.55%2c 896 318.96Q967.17 294.13%2c 992 365.31Q1030.16 243.47%2c 1152 281.63Q1217.72 251.35%2c 1248 317.06Q1341.78 250.84%2c 1408 344.61Q1518.79 295.4%2c 1568 406.19Q1569.85 312.03%2c 1664 313.88Q1698.11 251.99%2c 1760 286.1Q1879.88 245.99%2c 1920 365.87Q1974.34 260.21%2c 2080 314.55z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M1952 560L0 560 L0 488.38Q76.13 404.51%2c 160 480.64Q218.38 379.02%2c 320 437.41Q387.07 344.49%2c 480 411.56Q579.56 351.12%2c 640 450.68Q674.51 389.19%2c 736 423.7Q762.96 354.66%2c 832 381.62Q889.91 343.53%2c 928 401.45Q1020.77 334.23%2c 1088 427Q1191.15 370.15%2c 1248 473.3Q1341.2 406.5%2c 1408 499.71Q1425.77 421.48%2c 1504 439.24Q1540.66 379.9%2c 1600 416.56Q1673.23 393.79%2c 1696 467.03Q1736.36 411.39%2c 1792 451.75Q1896.38 396.13%2c 1952 500.52z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M2016 560L0 560 L0 561.54Q56.85 458.39%2c 160 515.24Q251.36 446.6%2c 320 537.96Q373.74 431.7%2c 480 485.43Q541.63 451.07%2c 576 512.7Q667.54 444.24%2c 736 535.78Q807.13 510.9%2c 832 582.03Q885.08 539.11%2c 928 592.18Q969.6 473.78%2c 1088 515.38Q1142.95 474.34%2c 1184 529.29Q1293.8 479.09%2c 1344 588.88Q1372.23 457.11%2c 1504 485.34Q1564.56 449.9%2c 1600 510.46Q1706.18 456.64%2c 1760 562.83Q1775.48 482.31%2c 1856 497.78Q1955.89 437.67%2c 2016 537.57z' fill='rgba(39%2c 88%2c 149%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1920' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ width: "50%", mt: 10 }}>
        <Fade in={visibleStates["welcome-message"]} timeout={500}>
          <Stack id="welcome-message" ref={(el) => (refs.current[0] = el)}>
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
            ref={(el) => (refs.current[1] = el)}
            id="welcome-box"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
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
                <Typography sx={{ textAlign: "center" }}>
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
                    onClick={() => setOpenSideMenu(true)}
                    color="altOrange"
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
                    color="orange"
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
