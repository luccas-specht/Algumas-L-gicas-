//
/**
 *  divide -> divide the vector until we got only one vector with one element,
 *            when got this, the vector is already sorted.
 *  [2, 6, 4, 7, 1] ->
 *                    [2, 6]
 *                     /  \
 *                    [2] [6] -> base case
 * ---------------- executa conquer
 *
 *
 *
 *
 */

// conquer

// input: [9, 1, 4, 2, 10]
/**
 * 1--
 *  mid = 5 / 2 => 2.5 => floor = 2
 *  const slicedLeft = arr.slice(0, mid);
 *  leftArr = [9, 1] () -> current execution
 *  --
 *  mid = 2 / 2 => 1.5 => floor = 1
 *  const slicedLeft = arr.slice(0, mid);
 *  leftArr = [9] () -> current execution -> return [9]
 *  --
 *
 */

// [9] [1]
function swipeZerosToRight(arr) {
  let l = 0;
  let r = 0;

  while (r < arr.length) {
    // swap element in js, instance of having a temp variable
    if (arr[r] !== 0) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
    }
    r++;
  }

  return arr;
}

function conquer(leftArr, rightArr) {
  const sorted = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < leftArr.length && indexRight < rightArr.length) {
    if (leftArr[indexLeft] <= rightArr[indexRight]) {
      sorted.push(leftArr[indexLeft]);
      indexLeft++;
    } else {
      sorted.push(rightArr[indexRight]);
      indexRight++;
    }
  }

  return [
    ...sorted,
    ...leftArr.slice(indexLeft),
    ...rightArr.slice(indexRight),
  ];
}

//[9, 1, 4, 2, 10]
// [9, 1]
// [9]    |^
// [1]

function divide(arr) {
  //console.log({ arr });
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  // [].slice = uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim: OBS O FIM NÃO É INCLUIDO NA SEQUENCENCIA
  // POR EXEMPLO: [9, 1, 4, 2, 10].slice(0, 2) = resultado será: [9, 1] -> pois o elemento no index 2 não é incluido
  // uma copia entre o started e o fim,

  const slicedLeft = arr.slice(0, mid);
  const leftArr = divide(slicedLeft); // [9]

  const slicedRight = arr.slice(mid);
  const rightArr = divide(slicedRight); // [1]

  return conquer(leftArr, rightArr);
}

// Run: O(N), Space: O(N)
function mergeSortZerosAtRight(arr) {
  const sorted = divide(arr); // Run: O(n log n), Space: O(N)
  return swipeZerosToRight(sorted); // Run: O(n), Space: O(1)
}

module.exports = mergeSortZerosAtRight;
