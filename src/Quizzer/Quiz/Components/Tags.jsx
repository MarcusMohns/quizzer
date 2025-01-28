import React from "react";
import tags from "../../../Utils/tags";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Tags = ({ questionData }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        minHeight: "80px",
      }}
      direction="column"
    >
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          alignItems: "flex-end",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ mb: 1 }} variant="subtitle2">
          tags:
        </Typography>
        <Chip
          variant="outlined"
          label={tags[questionData.category].title}
          icon={tags[questionData.category].icon}
        />
        <Chip variant="outlined" label={questionData.difficulty} />

        {questionData.tags.map((tag) => (
          <Chip label={tag} key={tag} />
        ))}
      </Stack>
    </Box>
  );
};

export default Tags;
