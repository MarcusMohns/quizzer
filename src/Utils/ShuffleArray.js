const ShuffleArray = (array) => {
  return array.sort((a, b) => (a < b ? -1 : 1));
};

export default ShuffleArray;
