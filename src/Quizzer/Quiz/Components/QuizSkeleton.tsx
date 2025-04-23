import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
      sx={{
        alignItems: "center",
        width: "100%",
        height: { xs: "40px", sm: "30px", md: "60px" },
      }}
    />
  </Grid>
);

const QuizSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 2, md: 4 },
        borderRadius: "10px",
        px: { sm: "5%", lg: "20%" },
        width: { xs: "100%", md: "85%" },
      }}
    >
      <Skeleton
        sx={{
          height: "200px",
          alignItems: "center",
          borderRadius: "7px",
          width: { xs: "100%", md: "75%" },
        }}
      />
      <Skeleton variant="text" sx={{ fontSize: "2rem", mx: 10, p: 2 }} />
      <Skeleton sx={{ width: "75%", height: "80px", mb: 2 }} />
      <Skeleton sx={{ width: "75%", height: "20px" }} />
      <Skeleton sx={{ alignSelf: "flex-start", mx: "10%", mt: 5 }} />
      <Grid container spacing={2} sx={{ width: "100%", px: 3 }}>
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
          sx={{
            alignSelf: "center",
            height: "50px",
            width: "20%",
            mx: 2,
          }}
        />
        <Skeleton
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
