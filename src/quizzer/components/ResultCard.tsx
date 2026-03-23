import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grow from "@mui/material/Grow";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { alpha, useTheme } from "@mui/material/styles";
import { QuizResult } from "../../store";

interface ResultCardProps {
  result: QuizResult;
  index: number;
}

const ResultCard = ({ result, index }: ResultCardProps) => {
  const theme = useTheme();

  const isSkipped = result.selectedAnswer === "Not Answered";
  const isCorrect = result.correctlyAnswered;

  let statusColor = theme.palette.text.disabled;
  let StatusIcon = HelpOutlineOutlinedIcon;
  let secondaryText = `Skipped. Correct answer: ${result.correctAnswer}`;

  if (!isSkipped) {
    if (isCorrect) {
      statusColor = theme.palette.success.main;
      StatusIcon = CheckCircleOutlineIcon;
      secondaryText = `Correct! Answer: ${result.correctAnswer}`;
    } else {
      statusColor = theme.palette.error.main;
      StatusIcon = CancelOutlinedIcon;
      secondaryText = `Incorrect. You chose ${result.selectedAnswer}. Correct: ${result.correctAnswer}`;
    }
  }

  return (
    <Grow
      in={true}
      timeout={800}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Paper
        elevation={6}
        sx={{
          mb: 1.5,
          borderRadius: 2,
          bgcolor: theme.palette.background.paper,
          borderLeft: `6px solid ${statusColor}`,
          overflow: "hidden",
        }}
      >
        <ListItem alignItems="flex-start" sx={{ py: 1 }}>
          <ListItemIcon sx={{ minWidth: 50, mt: 0.5 }}>
            <Avatar
              sx={{
                bgcolor: alpha(statusColor, 0.15),
                color: statusColor,
                width: 35,
                height: 35,
                fontWeight: "bold",
                mr: 2,
              }}
            >
              {result.questionNum}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h6" fontSize="1rem" gutterBottom>
                {result.questionText}
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <StatusIcon fontSize="small" sx={{ color: statusColor }} />
                {secondaryText}
              </Typography>
            }
          />
        </ListItem>
      </Paper>
    </Grow>
  );
};

export default ResultCard;
