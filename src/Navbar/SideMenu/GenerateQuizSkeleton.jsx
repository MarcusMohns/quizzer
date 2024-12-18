import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const SkeletonCheckBoxes = (len) =>
  Array.from({ length: len }, (_, index) => (
    <Stack spacing={1} sx={{ mt: 3 }} direction="row" key={`${len}-${index}`}>
      <Skeleton variant="squared" animation="wave" width={30} height={30} />
      <Skeleton variant="rounded" animation="wave" width={170} height={30} />
    </Stack>
  ));

export default function GenerateQuizSkeleton() {
  return (
    <Stack sx={{ px: 3, width: "280px", alignItems: "flex-start" }}>
      <Skeleton
        variant="rounded"
        animation="wave"
        width={230}
        height={60}
        sx={{ mt: 1 }}
      />
      {SkeletonCheckBoxes(7)}
      <Skeleton
        variant="text"
        animation="wave"
        sx={{ fontSize: "2rem", width: "90%", mt: 2 }}
      />
      {SkeletonCheckBoxes(4)}
      <Skeleton
        variant="rounded"
        animation="wave"
        width={230}
        height={30}
        sx={{ mt: 3 }}
      />
    </Stack>
  );
}
