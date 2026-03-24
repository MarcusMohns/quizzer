import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import tags, { QuizState } from "../../../../store";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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

  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        p: 4,
        borderRadius: 4,
        bgcolor: "primary.dark",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          height: "100%",
          width: "100%",
          extAlign: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" component="span" fontWeight="800">
            {quizData.length}
          </Typography>
          <Typography variant="h5" component="span" color="text.secondary">
            Questions
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          my: 3,
        }}
      >
        <Typography variant="overline" color="text.secondary" gutterBottom>
          Categories
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {uniqueCategories.map((category) => (
            <Chip
              key={category}
              label={tags[category].title}
              icon={tags[category].icon}
              variant="outlined"
              color="info"
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          my: 3,
        }}
      >
        <Typography variant="overline" color="text.secondary" gutterBottom>
          Difficulty
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {uniqueDifficulties.map((difficulty) => (
            <Chip
              label={difficulty}
              key={difficulty}
              variant="outlined"
              color="info"
              sx={{ borderRadius: 2, textTransform: "capitalize" }}
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

      {uniqueTags.length > 0 && (
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography variant="overline" color="text.secondary" gutterBottom>
              Tags
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
            >
              {uniqueTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{ bgcolor: "action.hover" }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      )}
    </Paper>
  );
};

export default QuizInfo;
