import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useElementOnScreen from "../Utils/useElementOnScreen";
import PropTypes from "prop-types";
import CardsSection from "./CardsSection";
import WelcomeSection from "./WelcomeSection";

const FrontPage = ({ setQuizData, setOpenSideMenu }) => {
  FrontPage.propTypes = {
    setQuizData: PropTypes.func.isRequired,
    setOpenSideMenu: PropTypes.func.isRequired,
  };
  const [refs, visibleStates] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

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
      <CardsSection
        refs={refs}
        visibleStates={visibleStates}
        setOpenSideMenu={setOpenSideMenu}
      />
      <WelcomeSection
        visibleStates={visibleStates}
        refs={refs}
        setQuizData={setQuizData}
      />
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
