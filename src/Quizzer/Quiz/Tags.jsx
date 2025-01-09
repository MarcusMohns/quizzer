import React from "react";
import tags from "../../Utils/tags";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Tags = ({ questionData }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-start" }}
      direction="column"
    >
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
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
