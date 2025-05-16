import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography } from "@mui/material";
import StyledMenuIconButton from "./components/StyledMenuIconButton.tsx";
const GenerateQuizForm = lazy(
  () => import("./components/generateQuizForm/GenerateQuizForm.tsx")
);
import { QuizState } from "../store.tsx";
import SideMenuSkeleton from "./components/SideMenuSkeleton.tsx";
import Stack from "@mui/material/Stack";

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
        sx={{
          "& .MuiDrawer-paper": {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "background.default",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "64px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              minHeight: "64px",
              ml: 2,
            }}
          >
            <StyledMenuIconButton
              handleSideMenuOpen={handleSideMenuOpen}
              open={false}
            />
            <Typography variant="h6" component="div">
              🐦Quizzer
            </Typography>
          </Stack>
          <Suspense fallback={<SideMenuSkeleton />}>
            <GenerateQuizForm
              setQuizData={handleSetQuizData}
              handleSideMenuOpen={handleSideMenuOpen}
            />
          </Suspense>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            pr: 2,
          }}
        >
          <Box
            sx={{
              height: "40px",
              width: "12px",
              backgroundColor: "primary.dark",
              borderRadius: 3,
            }}
          />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
