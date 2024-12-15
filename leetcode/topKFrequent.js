/* Run: O(n log n) Space: O(n) */
var topKFrequent = function (nums, k) {
  const frequencyAppear = new Map();
  const vector = [];

  nums.forEach((number) => {
    frequencyAppear.set(number, (frequencyAppear.get(number) || 0) + 1);
  });

  frequencyAppear.forEach((value, key) => {
    vector.push({ key, value });
  });

  const result = vector
    .sort()
    .slice(0, k)
    .map((element) => ~~element.key); // ~~ convert string to number

  return result;
};

module.exports = topKFrequent;

/**
 * 
 * 
 * var topKFrequent = function (nums, k) {
  const hash = nums.reduce((acc, currentEle) => {
    acc[currentEle] = (acc[currentEle] ?? 0) + 1;
    return acc;
  }, {});

  const vector = Object.entries(hash).reduce((acc, currentEle) => {
    acc.push({ key: currentEle[0], value: currentEle[1] });
    return acc.sort((prev, next) => next.value - prev.value);
  }, []);

  const result = vector.slice(0, k).map((element) => ~~element.key);

  return result;
};
 * 
 */
