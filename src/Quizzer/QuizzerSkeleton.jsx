import Skeleton from "@mui/material/Skeleton";

const QuizzerSkeleton = () => {
  return (
    <>
      <Skeleton
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          width: "100%",
          alignItems: "center",
          p: 0,
          borderRadius: "7px",
        }}
      />
      <Skeleton
        variant="outlined"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
      />
      <Skeleton
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 2, md: 5 },
          borderRadius: "10px",
          px: { sm: "5%", lg: "20%" },
        }}
      ></Skeleton>
    </>
  );
};

export default QuizzerSkeleton;
