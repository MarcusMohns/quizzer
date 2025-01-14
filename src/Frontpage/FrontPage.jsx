import Box from "@mui/material/Box";
import useElementOnScreen from "../Utils/useElementOnScreen";
import CardsSection from "./CardsSection/CardsSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import { useRef } from "react";
import ScrollTopButton from "./ScrollTopButton";
import Footer from "../Footer";

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
  const scrollToTop = () => scrollTo({ top: 0, left: 0, behavior: "smooth" });

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
        scrollToTop={scrollToTop}
        visible={visibleStates["quiz-cards-container"]}
      />
      <Footer />
    </Box>
  );
};

export default FrontPage;
