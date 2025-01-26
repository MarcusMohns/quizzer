import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import tags from "../../../../Utils/tags";
import { styled } from "@mui/material/styles";

const QuizInfo = ({ quizData }) => {
  const tagsAndCategories = { categories: [], tags: [], difficulties: [] };
  quizData.forEach((quiz) => {
    tagsAndCategories.categories.push(quiz.category);
    tagsAndCategories.difficulties.push(quiz.difficulty);
    tagsAndCategories.tags.push(...quiz.tags);
  });
  const uniqueCategories = [...new Set(tagsAndCategories.categories)];
  const uniqueDifficulties = [...new Set(tagsAndCategories.difficulties)];
  const uniqueTags = [...new Set(tagsAndCategories.tags)];

  const stackStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    p: 1,
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          p: 1,
          borderRadius: 5,
          m: 2,
        }}
      >
        <Typography sx={{ textAlign: "center", px: 2 }} variant="h5">
          {quizData.length} Questions 💭
        </Typography>
      </Box>

      <Box
        sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1, borderRadius: 5, m: 2 }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          Quiz will be on the categories 📚
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={stackStyles}>
          {uniqueCategories.map((category) => (
            <Chip
              label={tags[category].title}
              icon={tags[category].icon}
              key={category}
              sx={{ p: 2, fontSize: "0.9rem" }}
            />
          ))}
        </Stack>
      </Box>

      <Box
        sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1, borderRadius: 5, m: 2 }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          This quiz will have questions about:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={stackStyles}>
          {uniqueTags.map((tag) => (
            <Chip label={tag} key={tag} />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1, borderRadius: 5, m: 2 }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          This quiz will have questions with the following difficulty levels:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={stackStyles}>
          {uniqueDifficulties.map((difficulty) => (
            <Chip label={difficulty} key={difficulty} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default QuizInfo;
