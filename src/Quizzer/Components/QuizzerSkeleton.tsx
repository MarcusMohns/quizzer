import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const QuizzerSkeleton = () => {
  return (
    <Box
      sx={{
        mx: { sm: "5%", lg: "20%" },
        mt: 8,
      }}
    >
      <Skeleton
        variant="text"
        sx={{
          fontSize: "3rem",
          m: 2,
          width: "30%",
          justifySelf: "center",
          textAlign: "center",
        }}
      />
      <Skeleton
        sx={{
          height: "50px",
          borderRadius: "7px",
          m: 2,
        }}
      />
      <Skeleton
        sx={{
          height: "80px",
          borderRadius: "7px",
          m: 2,
        }}
      />
      <Skeleton
        sx={{
          height: "150px",
          borderRadius: "7px",
          m: 2,
        }}
      />
      <Skeleton
        sx={{
          height: "80px",
          borderRadius: "7px",
          m: 2,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "2rem",
          width: "30%",
          justifySelf: "center",
          textAlign: "center",
        }}
      />
      <Box
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "150px", height: "55px", mx: 1 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "150px", height: "55px", mx: 1 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{ width: "75px", height: "40px", m: 1 }}
        />
        <Skeleton
          variant="rounded"
          sx={{ width: "170px", height: "40px", m: 1 }}
        />
      </Box>
    </Box>
  );
};

export default QuizzerSkeleton;
