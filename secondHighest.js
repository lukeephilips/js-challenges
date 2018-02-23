// Given a non-empty array of signed integers, find the second highest value.

let input = [-1, 10, 0];

secondHighest = (arr) => {
  let sorted = arr.sort((a, b) => a - b);

  return sorted[arr.length - 2];
};

secondHighest(input);
