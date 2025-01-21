const millisToMinutesAndSeconds = ({ minutes, seconds }) => {
  return minutes * 60000 + seconds * 1000;
};

export default millisToMinutesAndSeconds;
