import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  return (
    <Box>
      <Divider orientation="horizontal" variant="middle" flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "250px",
          px: 8,
        }}
      >
        <Typography variant="subtitle2" component="p">
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
          <Tooltip title="GitHub" aria-label="scrollToTop" placement="left">
            <Link
              href="https://github.com/MarcusMohns"
              underline="hover"
              target="_blank"
              rel="noopener"
              color="text.secondary"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" aria-label="scrollToTop" placement="top">
            <Link
              href="https://www.linkedin.com/in/marcus-mohns-845303224/"
              underline="hover"
              target="_blank"
              rel="noopener"
              color="text.secondary"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip
            title="Marcus' Portfolio"
            aria-label="scrollToTop"
            placement="right"
          >
            <Link
              href="https://marcusmohns.onrender.com/"
              underline="hover"
              target="_blank"
              rel="noopener"
              color="text.secondary"
            >
              <FireplaceIcon fontSize="large" />
            </Link>
          </Tooltip>
        </Box>
        <Typography variant="subtitle2" component="p">
          Vectors and icons by{" "}
          <Link
            href="https://www.svgrepo.com"
            target="_blank"
            sx={{ textDecoration: "none", ml: 0.5 }}
            underline="hover"
            color="text.primary"
          >
            https://www.svgrepo.com/
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
