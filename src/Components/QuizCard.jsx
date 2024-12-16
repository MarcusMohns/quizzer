import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";

export default function QuizCard({
  text = "Quiz Text",
  header = "Quiz Header",
  image = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
}) {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
QuizCard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
