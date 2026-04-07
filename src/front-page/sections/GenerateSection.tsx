import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { VisibleStates } from "../store";
import AnimatedCogwheel from "../../css-animations/animated-cogwheel/AnimatedCogwheel";
import React, { useState, useCallback } from "react";

interface GenerateSectionInterface {
  visibleStates: VisibleStates;
  registerRef: (node: HTMLElement | null) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>,
  ) => void;
}

const GenerateSection = ({
  registerRef,
  visibleStates,
  handleSideMenuOpen,
}: GenerateSectionInterface) => {
  const [containerNode, setContainerNode] = useState<HTMLElement | null>(null);
  const handleRef = useCallback(
    (node: HTMLElement | null) => {
      setContainerNode(node);
      registerRef(node);
    },
    [registerRef],
  );

  return (
    <Box
      ref={handleRef}
      component="section"
      id="generate-section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "700px",
        height: {
          xs: "130vh",
          sm: "100vh",
        },
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1a1f3b" : "#ffddaf",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          backgroundImage: (theme) =>
            theme.palette.mode === "dark"
              ? "url(/images/dark-cloudy.svg)"
              : "url(/images/light-cloudy.svg)",
          transform: "scaleY(-1)",
          translate: "0 -2px",
          backgroundPosition: "bottom",
          transition: "background-image 0.1s ease-in-out",
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
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
          mt: 20,
        }}
      >
        <Slide
          in={visibleStates["generate-section"]}
          container={containerNode}
          timeout={1000}
          style={{ transitionDelay: "300ms" }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.warning.main}, ${theme.palette.error.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
              mb={2}
            >
              Generate a quiz!
            </Typography>
            <Typography
              id="generate-section-header"
              sx={{
                textAlign: "center",
                zIndex: 0,
              }}
              variant="h4"
            >
              <AnimatedCogwheel />
            </Typography>
          </Box>
        </Slide>

        <Fade
          in={visibleStates["generate-section"]}
          timeout={600}
          style={{ transitionDelay: "900ms" }}
        >
          <Box sx={{ textAlign: "center", my: 3 }}>
            <Typography
              sx={{ textAlign: "center", mb: 3 }}
              color="text.secondary"
              variant="body1"
            >
              Select different categories, difficulty and quantity
            </Typography>
            <Button
              id="generate-quiz-button"
              color="warning"
              size="large"
              variant="contained"
              sx={{
                my: 2,
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 4,
                p: 1.5,
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-2px)" },
              }}
              onClick={() => handleSideMenuOpen(true)}
              endIcon={<MenuIcon />}
            >
              Generate Quiz
            </Button>

            <Typography
              id="generate-section-text"
              sx={{
                mt: 2,
                color: "text.disabled",
                fontSize: "0.9rem",
              }}
            >
              Quizzer uses{" "}
              <Link
                href="https://the-trivia-api.com/docs/v2/"
                target="_blank"
                rel="noopener noreferrer"
                variant="subtitle2"
                color="inherit"
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
