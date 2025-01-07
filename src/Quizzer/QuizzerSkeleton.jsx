import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const QuestionSkeleton = () => (
  <Grid
    size={{ xs: 12, md: 6 }}
    sx={{
      display: "flex",
      justifyContent: "center",
      height: "75px",
    }}
  >
    <Skeleton
      variant="outlined"
      sx={{
        alignItems: "center",
        borderRadius: "10px",
        width: "100%",
        height: "75px",
      }}
    />
  </Grid>
);

const QuizzerSkeleton = () => {
  return (
    <Box
      sx={{
        mx: { sm: "5%", lg: "20%" },
        mt: 15,
      }}
    >
      <Skeleton
        variant="outlined"
        sx={{
          height: "200px",
          alignItems: "center",
          borderRadius: "7px",
          mx: 10,
        }}
      />
      <Skeleton variant="text" sx={{ fontSize: "2rem", mx: 10 }} />
      <Skeleton
        variant="outlined"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2, mt: 5 }}
      />
      <Grid container spacing={2} sx={{ width: "100%", px: 10 }}>
        <QuestionSkeleton />
        <QuestionSkeleton />
        <QuestionSkeleton />
        <QuestionSkeleton />
      </Grid>
    </Box>
  );
};

export default QuizzerSkeleton;
