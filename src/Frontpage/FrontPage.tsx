import Box from "@mui/material/Box";
import CardsSection from "./Components/CardsSection/CardsSection.tsx";
import WelcomeSection from "./Components/WelcomeSection/WelcomeSection.tsx";
import GenerateSection from "./Components/GenerateSection/GenerateSection.tsx";
import { useRef } from "react";
import ScrollTopButton from "./Components/ScrollTopButton.tsx";
import { QuizState } from "../store";
import { VisibleStates } from "./store.tsx";
import { useElementOnScreen } from "./store.tsx";

interface FrontPageProps {
  handleSetQuizData: (data: QuizState | null) => void;
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
}

const FrontPage = ({
  handleSetQuizData,
  handleSideMenuOpen,
}: FrontPageProps) => {
  const { refs, visibleStates } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const scrollRef = useRef<HTMLElement[]>([]);
  const handleScroll = (idx: number) => {
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
      }}
    >
      <WelcomeSection
        refs={refs}
        scrollRef={scrollRef}
        visibleStates={visibleStates}
        handleSideMenuOpen={handleSideMenuOpen}
        handleScroll={handleScroll}
      />
      <GenerateSection
        refs={refs}
        visibleStates={visibleStates}
        handleSideMenuOpen={handleSideMenuOpen}
      />
      <CardsSection
        refs={refs}
        scrollRef={scrollRef}
        visibleStates={visibleStates}
        handleSetQuizData={handleSetQuizData}
      />
      <ScrollTopButton
        scrollToTop={scrollToTop}
        visible={(visibleStates as VisibleStates)["quiz-cards-container"]}
      />
    </Box>
  );
};

export default FrontPage;
