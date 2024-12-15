const mergeSort = require('./mergeSort');

it.each([
  {
    input: [9, 1, 4, 3, 4, 8, 2, 10],
    output: [1, 2, 3, 4, 4, 8, 9, 10],
  },
  {
    input: [1, 4, 3, 4, 8, 2, 10, -9],
    output: [-9, 1, 2, 3, 4, 4, 8, 10],
  },
])('should sort the array using merge sort', ({ input, output }) => {
  const result = mergeSort(input);
  expect(result).toStrictEqual(output);
});
