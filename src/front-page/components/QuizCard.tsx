import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { QuizState } from "../../store";
import { alpha } from "@mui/material/styles";

interface QuizCardInterface {
  description: string;
  header: string;
  image: string;
  icon: string;
  questions: QuizState;
  handleSetQuizData: (data: QuizState | null) => void;
  index: number;
  visible: boolean;
}

export const QuizCard = ({
  description = "Quiz Text",
  header = "Quiz Header",
  icon = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  image = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  questions,
  handleSetQuizData,
  index,
  visible,
}: QuizCardInterface) => {
  return (
    <Fade
      in={visible}
      style={{ transitionDelay: `${index * 120}ms` }}
      timeout={800}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          borderRadius: 4,
          p: 1,
          transition: "all 0.3s ease-in-out",
          backgroundColor: "background.paper",
          border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <CardHeader
          sx={{
            pb: 1,
            "& .MuiCardHeader-title": {
              fontWeight: 700,
              fontSize: "1.25rem",
            },
          }}
          avatar={
            <Avatar
              src={icon}
              sx={{
                bgcolor: (theme) => alpha(theme.palette.secondary.dark, 0.6),
                p: 0.5,
                width: 45,
                height: 45,
              }}
            />
          }
          title={header}
          subheader={`${questions.length} questions`}
        />
        <CardMedia
          component="img"
          image={image}
          alt="category"
          loading="lazy"
          sx={{
            width: "120px",
            height: "120px",
            mx: "auto",
            my: 2,
            objectFit: "contain",
          }}
        />
        <CardContent sx={{ flexGrow: 1, pt: 0 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleSetQuizData(questions)}
            color="secondary"
            sx={{ fontWeight: "bold", borderRadius: 2, py: 1 }}
          >
            Start Quiz
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default QuizCard;
