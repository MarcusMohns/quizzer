import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { QuizState } from "../../store";

interface QuizCardInterface {
  description: string;
  header: string;
  image: string;
  icon: string;
  questions: QuizState;
  handleSetQuizData: (data: QuizState | null) => void;
}

export const QuizCard = ({
  description = "Quiz Text",
  header = "Quiz Header",
  icon = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  image = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  questions,
  handleSetQuizData,
}: QuizCardInterface) => {
  return (
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 275,
        m: 2,
        p: 2,
      }}
    >
      <CardHeader
        sx={{
          bgcolor: "background.default",
          mb: 2,
        }}
        avatar={<Avatar src={icon} sx={{ bgcolor: "primary.light" }} />}
        title={header}
        subheader={`${questions.length} questions`}
      />
      <CardMedia
        component="img"
        image={image}
        alt="category"
        loading="lazy"
        sx={{ width: "110px", mx: "auto" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "center" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto", mx: "auto" }}>
        <Button
          variant="outlined"
          onClick={() => handleSetQuizData(questions)}
          color="info"
        >
          Start Quiz
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuizCard;
