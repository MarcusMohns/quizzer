import Box from "@mui/material/Box";
import useElementOnScreen from "../Utils/useElementOnScreen";
import CardsSection from "./Components/CardsSection/CardsSection";
import WelcomeSection from "./Components/WelcomeSection/WelcomeSection";
import { useRef } from "react";
import ScrollTopButton from "./Components/ScrollTopButton";
import Footer from "../Footer";
import GenerateSection from "./Components/GenerateSection/GenerateSection";

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
        alignSelf: "center",
        justifySelf: "center",
        p: 0,
        mt: 1,
        width: { xs: "100%", md: "75%" },
      }}
    >
      <WelcomeSection
        visibleStates={visibleStates}
        setOpenSideMenu={setOpenSideMenu}
        refs={refs}
        scrollRef={scrollRef}
        handleScroll={handleScroll}
      />
      <GenerateSection
        refs={refs}
        visibleStates={visibleStates}
        setOpenSideMenu={setOpenSideMenu}
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
