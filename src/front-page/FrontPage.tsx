import Box from "@mui/material/Box";
import CardsSection from "./sections/CardsSection.tsx";
import WelcomeSection from "./sections/WelcomeSection.tsx";
import GenerateSection from "./sections/GenerateSection.tsx";
import { useRef, useMemo, useCallback } from "react";
import ScrollTopButton from "./components/ScrollTopButton.tsx";
import { QuizState } from "../store.tsx";
import { useElementOnScreen } from "./store.tsx";

interface FrontPageProps {
  handleSetQuizData: (data: QuizState | null) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>,
  ) => void;
}

const FrontPage = ({
  handleSetQuizData,
  handleSideMenuOpen,
}: FrontPageProps) => {
  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }),
    [],
  );

  const { registerRef, visibleStates } = useElementOnScreen(observerOptions);

  const scrollRef = useRef<(HTMLElement | null)[]>([]);
  const handleScroll = (idx: number) => {
    // Scroll to the element by ID
    scrollRef.current[idx]?.scrollIntoView({ behavior: "smooth" });
  };
  const setWelcomeScrollRef = useCallback((node: HTMLElement | null) => {
    scrollRef.current[0] = node;
  }, []);
  const setCardsScrollRef = useCallback((node: HTMLElement | null) => {
    scrollRef.current[1] = node;
  }, []);

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
        width: "100%",
        p: 0,
        mt: 1,
      }}
    >
      <WelcomeSection
        registerRef={registerRef}
        setScrollRef={setWelcomeScrollRef}
        visibleStates={visibleStates}
        handleSideMenuOpen={handleSideMenuOpen}
        handleScroll={handleScroll}
      />
      <GenerateSection
        registerRef={registerRef}
        visibleStates={visibleStates}
        handleSideMenuOpen={handleSideMenuOpen}
      />
      <CardsSection
        registerRef={registerRef}
        setScrollRef={setCardsScrollRef}
        visibleStates={visibleStates}
        handleSetQuizData={handleSetQuizData}
      />
      <ScrollTopButton
        scrollToTop={scrollToTop}
        visible={visibleStates["quiz-cards-container"]}
      />
    </Box>
  );
};

export default FrontPage;
