import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography } from "@mui/material";
import StyledMenuIconButton from "./Components/StyledMenuIconButton.js";
const GenerateQuizForm = lazy(
  () => import("./Components/GenerateQuizForm/GenerateQuizForm.js")
);
import { QuizState } from "../store.js";
import SideMenuSkeleton from "./Components/SideMenuSkeleton.js";

export interface SideMenuProps {
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void;
  handleSetQuizData: (data: QuizState | null) => void;
  sideMenuOpen: boolean;
}

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function SideMenu({
  handleSideMenuOpen,
  handleSetQuizData,
  sideMenuOpen,
}: SideMenuProps) {
  return (
    <Box>
      <StyledMenuIconButton
        handleSideMenuOpen={handleSideMenuOpen}
        open={true}
      />
      <SwipeableDrawer
        open={sideMenuOpen}
        onClose={() => handleSideMenuOpen(false)}
        onOpen={() => handleSideMenuOpen(true)}
        aria-hidden="false"
        disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        disableDiscovery={true}
        // iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough.
        //iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
            minHeight: "64px",
          }}
        >
          <StyledMenuIconButton
            handleSideMenuOpen={handleSideMenuOpen}
            open={false}
          />
          <Typography variant="h6" component="div">
            🐦Quizzer
          </Typography>
        </Box>
        <Suspense fallback={<SideMenuSkeleton />}>
          <GenerateQuizForm
            setQuizData={handleSetQuizData}
            handleSideMenuOpen={handleSideMenuOpen}
          />
        </Suspense>
      </SwipeableDrawer>
    </Box>
  );
}
