export const millisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));

  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const minutesAndSecondsToMillis = (minutes: number, seconds: number) =>
  minutes * 60000 + seconds * 1000;

export default millisToMinutesAndSeconds;
