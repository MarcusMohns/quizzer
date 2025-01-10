import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <>
      <Divider orientation="horizontal" variant="middle" flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          p: 5,
          m: 5,
        }}
      >
        <Typography sx={{}} variant="subtitle2">
          Made by @MarcusMohns using React and Material-UI
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "20px",
            mx: "auto",
            "& svg": {
              m: 1,
            },
          }}
        >
          <Link href="#" underline="hover">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href="#" underline="hover">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="#" underline="hover">
            <FireplaceIcon fontSize="large" />
          </Link>
        </Box>
        <Typography sx={{ visibility: "hidden" }}>
          Made by @MarcusMohns using React and Material-UI
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
