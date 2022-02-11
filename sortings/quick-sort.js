const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length/2];
  const smallest = arr.filter((element) => element < pivot);
  const biggest = arr.filter((element) => element > pivot);

  return [...quickSort(smallest), pivot, ...quickSort(biggest)];
};

const result = quickSort([55, 25, 8, 333, -1, 11]);
console.log(result);
