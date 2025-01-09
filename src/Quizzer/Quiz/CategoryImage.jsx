import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const CategoryImage = ({ image, title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "640px",
        height: "200px",
        justifySelf: "center",
        mb: 2,
      }}
    >
      <Box
        component="img"
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={image}
        alt={title}
        loading="lazy"
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Typography
        sx={{
          position: "relative",
          bottom: "50%",
          width: "100%",
          backgroundColor: "#00000091",
          fontSize: "1.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CategoryImage;
