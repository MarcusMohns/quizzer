import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const QuestionSkeleton = () => (
  <Grid
    size={{ xs: 12, md: 6 }}
    sx={{
      display: "flex",
      justifyContent: "center",
      height: { sm: "30px", md: "60px" },
    }}
  >
    <Skeleton
      variant="outlined"
      sx={{
        alignItems: "center",
        width: "100%",
        height: { sm: "30px", md: "60px" },
      }}
    />
  </Grid>
);

const QuizSkeleton = () => {
  return (
    <Box
      sx={{
        mx: { sm: "5%", lg: "50%" },
        mt: 10,
        width: "70%",
      }}
    >
      <Skeleton
        variant="outlined"
        sx={{
          height: "200px",
          alignItems: "center",
          borderRadius: "7px",
          mx: 13,
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Skeleton
          variant="outlined"
          sx={{
            alignSelf: "center",
            height: "50px",
            width: "20%",
            mx: 2,
          }}
        />
        <Skeleton
          variant="outlined"
          sx={{
            alignSelf: "center",
            height: "50px",
            width: "20%",
            mx: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default QuizSkeleton;
