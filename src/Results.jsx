import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Results = ({ results, quizData }) => {
  Results.propTypes = {
    results: PropTypes.object.isRequired,
    quizData: PropTypes.array.isRequired,
  };

  // turn results object into an array of objects
  const resultsArray = Object.keys(results).map((key) => {
    return {
      ...quizData[key],
      pickedAnswer: Object.keys(results[key])[0] - 1,
      correctlyAnswered: Object.values(results[key])[0],
      questionNum: Number(key) + 1,
    };
  });

  return (
    <List dense={true}>
      {resultsArray.map((result, index) =>
        result.correctlyAnswered ? (
          <ListItem
            key={index}
            sx={{ backgroundColor: "success.default", my: 1 }}
          >
            <ListItemIcon>{result.questionNum}</ListItemIcon>
            <ListItemText
              primary={result.question.text}
              secondary={`Correct!  the answer was: ${result.correctAnswer}`}
            />
            <ListItemIcon>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
          </ListItem>
        ) : (
          <ListItem
            key={index}
            sx={{ backgroundColor: "error.default", my: 1 }}
          >
            <ListItemIcon>{result.questionNum}</ListItemIcon>
            <ListItemText
              primary={result.question.text}
              secondary={`Incorrect - You picked ${
                result.incorrectAnswers[result.pickedAnswer]
              }, the correct answer was: ${result.correctAnswer}`}
            />
            <ListItemIcon>
              <CancelOutlinedIcon />
            </ListItemIcon>
          </ListItem>
        )
      )}
    </List>
  );
};
export default Results;
