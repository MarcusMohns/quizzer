import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography } from "@mui/material";
import StyledMenuIconButton from "./components/StyledMenuIconButton.tsx";
import Divider from "@mui/material/Divider";
const GenerateQuizForm = lazy(
  () => import("./components/generate-quiz-form/GenerateQuizForm.tsx"),
);
import { QuizState } from "../store.tsx";
import SideMenuSkeleton from "./components/SideMenuSkeleton.tsx";

export interface SideMenuProps {
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>,
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
        disableBackdropTransition={!iOS}
        disableSwipeToOpen={true}
        // disableDiscovery={iOS}
        disableDiscovery={true}
        // iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough.
        //iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
        sx={{
          "& .MuiDrawer-paper": {
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: 400 },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            minHeight: 64,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            🐦 Quizzer
          </Typography>
          <StyledMenuIconButton
            handleSideMenuOpen={handleSideMenuOpen}
            open={false}
          />
        </Box>
        <Divider />
        <Box sx={{ p: 2, overflowY: "auto" }}>
          <Suspense fallback={<SideMenuSkeleton />}>
            <GenerateQuizForm
              setQuizData={handleSetQuizData}
              handleSideMenuOpen={handleSideMenuOpen}
            />
          </Suspense>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
