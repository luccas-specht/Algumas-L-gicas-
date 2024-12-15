/* Run: O(n + k) Space: O(K) */
const countingSort = function (arr) {
  const k = Math.max(...arr);
  const arraySize = k + 1;
  const countingVector = [...Array(arraySize)].map(() => 0);
  let indexFromOriginalVector = 0;

  arr.forEach((number) => {
    countingVector[number]++;
  });

  for (let number = 0; number <= k; number++) {
    let amountOfAppearing = countingVector[number];

    while (amountOfAppearing > 0) {
      arr[indexFromOriginalVector] = number;
      indexFromOriginalVector++;
      amountOfAppearing--;
    }
  }

  return arr;
};

/**
 * approach: this is going to shift the numbers to the right many times based in the smaller value in the range
 * for example: if we got the smaller being -2 all to numbers will be indexed + 2 positions
 * and the smaller will occupy the index 0 as we don't have negative indexes
 */
/* Run: O(n + k) Space: O(max - min) */
const countingSortAcceptingNegative = function (arr) {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  const arraySize = maxValue - minValue + 1;

  const countingVector = [...Array(arraySize)].map(() => 0);

  let indexFromOriginalVector = 0;

  arr.forEach((number) => {
    countingVector[number - minValue]++;
  });

  for (let number = 0; number <= arraySize; number++) {
    let amountOfAppearing = countingVector[number];

    while (amountOfAppearing > 0) {
      arr[indexFromOriginalVector] = number + minValue;
      indexFromOriginalVector++;
      amountOfAppearing--;
    }
  }

  return arr;
};

module.exports = countingSort;
module.exports = countingSortAcceptingNegative;
