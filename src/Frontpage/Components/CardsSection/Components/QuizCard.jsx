import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function QuizCard({
  description = "Quiz Text",
  header = "Quiz Header",
  image = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  questions,
  setQuizData,
}) {
  return (
    <Card
      sx={{
        maxWidth: 275,
        m: 5,
        height: "100%",
        textAlign: "center",
      }}
    >
      <CardActionArea onClick={() => setQuizData(questions)}>
        <CardMedia
          component="img"
          height="140"
          width="275"
          image={image}
          alt="category"
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", justifySelf: "center" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
