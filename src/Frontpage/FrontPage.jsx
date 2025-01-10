import Box from "@mui/material/Box";
import useElementOnScreen from "../Utils/useElementOnScreen";
import CardsSection from "./CardsSection/CardsSection";
import WelcomeSection from "./WelcomeSection";
import Footer from "../Footer";
import { useRef } from "react";
import ScrollTopButton from "./ScrollTopButton";

const FrontPage = ({ setQuizData, setOpenSideMenu }) => {
  const [refs, visibleStates] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const scrollRef = useRef([]);
  const handleScroll = (idx) => {
    scrollRef.current[idx].scrollIntoView({ behavior: "smooth" });
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
      <WelcomeSection
        visibleStates={visibleStates}
        setOpenSideMenu={setOpenSideMenu}
        refs={refs}
        scrollRef={scrollRef}
        handleScroll={handleScroll}
      />
      <CardsSection
        refs={refs}
        visibleStates={visibleStates}
        setQuizData={setQuizData}
        scrollRef={scrollRef}
        handleScroll={handleScroll}
      />
      <ScrollTopButton
        handleScroll={handleScroll}
        visible={visibleStates["quiz-cards-container"]}
      />
      <Footer />
    </Box>
  );
};

export default FrontPage;
