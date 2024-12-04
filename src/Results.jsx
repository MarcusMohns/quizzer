import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Results = ({ results, quizData }) => {
  Results.propTypes = {
    results: PropTypes.object.isRequired,
    quizData: PropTypes.array.isRequired,
  };

  // turn results object into an array of objects
  const results123 = Object.keys(results).map((key) => {
    return {
      ...quizData[key],
      pickedAnswer: Object.keys(results[key])[0] - 1,
      correctlyAnswered: Object.values(results[key])[0],
      questionNum: Number(key) + 1,
    };
  });

  console.log(results123);
  return (
    <Box sx={{ p: 5, mt: 5 }}>
      {results123.map((result, index) =>
        result.correctlyAnswered ? (
          <Alert severity="success" color="success" key={index} sx={{ m: 2 }}>
            <AlertTitle>
              Correct! - Question {result.questionNum}: {result.question.text}
            </AlertTitle>
            {result.correctAnswer} is the correct answer!
          </Alert>
        ) : (
          <Alert severity="error" color="error" key={index} sx={{ m: 2 }}>
            <AlertTitle>
              Incorrect - Question {result.questionNum}: {result.question.text}
            </AlertTitle>
            You answered: {result.incorrectAnswers[result.pickedAnswer]} - The
            correct answer was: {result.correctAnswer}
          </Alert>
        )
      )}
    </Box>
  );
};
export default Results;
