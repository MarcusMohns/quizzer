import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

interface FooterProps {
  isFrontPage: boolean;
}

const Footer = ({ isFrontPage }: FooterProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        py: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "background.default"
            : isFrontPage
              ? "#7094fd"
              : theme.palette.background.default,
      }}
    >
      {/* Floating Bubbles scattered at the bottom */}
      {[
        { s: 16, l: "15%", d: "0s", x: 15 },
        { s: 12, l: "45%", d: "2s", x: -20 },
        { s: 24, l: "75%", d: "4s", x: 10 },
        { s: 14, l: "90%", d: "1s", x: -10 },
      ].map((b, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "20px",
            left: b.l,
            width: b.s,
            height: b.s,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.2)",
            animation: `footerBubbleRise 6s infinite ease-in ${b.d}`,
            pointerEvents: "none",
            zIndex: 1,
            "@keyframes footerBubbleRise": {
              "0%": {
                transform: "translateY(0) translateX(0) scale(0.5)",
                opacity: 0,
              },
              "20%": { opacity: 0.6 },
              "50%": {
                transform: `translateY(-80px) translateX(${b.x}px) scale(1)`,
              },
              "100%": {
                transform: `translateY(-180px) translateX(${
                  b.x * -0.5
                }px) scale(1.3)`,
                opacity: 0,
              },
            },
          }}
        />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: { xs: "90%", md: "80%" },
          minHeight: "100px",
          mx: "auto",
          px: 6,
          py: { xs: 3, md: 1, lg: 0 },
          position: "relative",
          zIndex: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "primary.light",
          backdropFilter: "blur(12px)",
          borderRadius: 6,
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 8px 32px 0 rgba(0, 0, 0, 0.4)"
              : "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          gap: { xs: 2, lg: 6 },
        }}
      >
        <Typography variant="subtitle2" component="p" fontWeight={500}>
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
              transition: "transform 0.3s ease-in-out, color 0.3s",
              "&:hover": {
                transform: "translateY(-5px) scale(1.2)",
              },
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
            sx={{ ml: 0.5 }}
            underline="always"
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
