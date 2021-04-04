// ===== Dummy Random Tags Array =====
const tagsArray = ['movie', 'sports', 'politics', 'celebrities', 'relationship', 'food', 'international', 'financial', 'school', 'internet'];

// ===== Number Of Target Data & Test Tags =====
const targetListingDataNum = 1000; // For insertion testing

// ===== HELPER FUNCTIONS =====
const addPadding = (numString) => {
  if (numString.length > 8 || numString.length === 0) {
    throw new Error('The number should be between 1 and 10,000,000');
  }
  return numString.toString().padStart(8, '0');
};
const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const randomDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
);
const randomTrueOrFalse = () => (Math.floor(Math.random() * 2) === 0);
const randomTag = () => {
  const randomTagsArrIndex = randomNumber(0, tagsArray.length - 1);
  return [randomTagsArrIndex, tagsArray[randomTagsArrIndex]];
};

module.exports = {
  targetListingDataNum,
  addPadding,
  randomNumber,
  randomDate,
  randomTrueOrFalse,
  randomTag,
};
