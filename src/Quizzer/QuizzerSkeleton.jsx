import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const QuizzerSkeleton = () => {
  return (
    <Box sx={{ mx: { sm: "5%", lg: "20%" } }}>
      <Skeleton
        sx={{
          height: "400px",
          alignItems: "center",
          borderRadius: "7px",
        }}
      />
      <Skeleton variant="text" sx={{ mx: "10%", fontSize: "2rem" }} />
      <Skeleton
        variant="outlined"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
      />
      <Skeleton
        sx={{
          alignItems: "center",
          mt: { xs: 2, md: 5 },
          borderRadius: "10px",
          px: { sm: "5%", lg: "20%" },
        }}
      ></Skeleton>
    </Box>
  );
};

export default QuizzerSkeleton;
