const findCurrentMinValue = (arr, index) => {
  let min = index;
  for (let j = index + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  return min;
};

const selectSort = (arr, initial = 0) => {
  if (initial === arr.length - 1) return arr;
  const minValue = findCurrentMinValue(arr, initial);

  const swap = arr[initial];
  arr[initial] = arr[minValue];
  arr[minValue] = swap;

  return selectSort(arr, initial + 1);
};

const result = selectSort([7821, -999, -11, 2, 3, 10e5, 9, -1, 11]);
console.log(result);
