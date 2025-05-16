import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Fade from "@mui/material/Fade";

interface CategoryImageProps {
  image: string;
  title: string;
}

const CategoryImage = ({ image, title }: CategoryImageProps) => {
  return (
    <Fade in={true} appear={true} timeout={800} key={image}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "640px",
          height: "200px",
          justifySelf: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: { xs: "0px", sm: "10px" },
            backgroundColor: "secondary.dark",
          }}
        />
        <Typography
          sx={{
            position: "relative",
            bottom: "50%",
            width: "100%",
            backgroundColor: "secondary.main",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Fade>
  );
};

export default CategoryImage;
