import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function QuizCard({
  text = "Quiz Text",
  header = "Quiz Header",
  image = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  questions,
  setQuizData,
}) {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardActionArea onClick={() => setQuizData(questions)}>
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
