import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import tags, { QuizState } from "../../../../store";

const QuizInfo = ({ quizData }: { quizData: QuizState }) => {
  const tagsAndCategories = {
    categories: [] as string[],
    tags: [] as string[],
    difficulties: [] as string[],
  };
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
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          p: 1,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 5,
          mx: 2,
        }}
        variant="h5"
      >
        {quizData.length} Questions 📕
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          p: 1,
          borderRadius: 5,
          m: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          📚 This quiz will test you on the following{" "}
          {uniqueCategories.length > 1 ? "categories" : "category"}:
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
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          p: 1,
          borderRadius: 5,
          m: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          👀 The questions will be about:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={stackStyles}>
          {uniqueTags.map((tag) => (
            <Chip label={tag} key={tag} />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          p: 1,
          borderRadius: 5,
          m: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          🦾 and the{" "}
          {uniqueDifficulties.length > 1 ? "difficulties" : "difficulty"} will
          be:
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={stackStyles}>
          {uniqueDifficulties.map((difficulty) => (
            <Chip
              label={difficulty}
              key={difficulty}
              sx={{ p: 2, fontSize: "0.9rem" }}
              icon={
                <span role="img" aria-label="difficulty-emoji">
                  {difficulty === "easy"
                    ? "🍏"
                    : difficulty === "medium"
                    ? "🍋"
                    : "🌶️"}
                </span>
              }
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default QuizInfo;
