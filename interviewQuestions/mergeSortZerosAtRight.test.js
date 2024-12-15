const mergeSortZerosAtRight = require('./mergeSortZerosAtRight');

it.each([
  {
    input: [9, 1, 0, 4, 0, 3, 4, 8, 0, 0, 2, 0, 10],
    output: [1, 2, 3, 4, 4, 8, 9, 10, 0, 0, 0, 0, 0],
  },
  {
    input: [0, 1, 4, 3, 4, 8, 2, 10, -9, 0, 0, 0],
    output: [-9, 1, 2, 3, 4, 4, 8, 10, 0, 0, 0, 0],
  },

  {
    input: [9, 1, 4, 2, 10, 0, 0, 0, 0],
    output: [1, 2, 4, 9, 10, 0, 0, 0, 0],
  },
])(
  'should sort the array using merge sort and put zeros at right',
  ({ input, output }) => {
    const result = mergeSortZerosAtRight(input);

    expect(result).toStrictEqual(output);
  }
);
