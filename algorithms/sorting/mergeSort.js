// conquer
function merge(leftArr, RightArr) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < RightArr.length) {
    if (leftArr[i] <= RightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(RightArr[j]);
      j++;
    }
  }

  return [...result, ...leftArr.slice(i), ...RightArr.slice(j)];
}

// divide
const mergeSort = function (arr) {
  // Base case
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  // Recursive calls
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

module.exports = mergeSort;
