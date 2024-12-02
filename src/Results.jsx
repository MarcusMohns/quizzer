import PropTypes from "prop-types";

const Results = ({ results, quizData }) => {
  Results.propTypes = {
    results: PropTypes.object.isRequired,
    quizData: PropTypes.array.isRequired,
  };
  return <div>Hey there .. </div>;
};

export default Results;
