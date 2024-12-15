const Calculator = require('./calculator');

test.each([
  {
    input: {
      operation: 'sum',
      values: [1, 2, 3, 4, 5, 6],
    },
    output: 21,
  },
  {
    input: {
      operation: 'multiplication',
      values: [2, 3, 5],
    },
    output: 30,
  },

  {
    input: {
      operation: 'exponentiation',
      values: [3, 2, 3],
    },
    output: 729,
  },
  {
    input: {
      operation: 'division',
      values: [4, 2, 4],
    },
    output: 0.5,
  },
  {
    input: {
      operation: 'fake',
    },
    output: 0.0,
  },
])('Should calculate correctly based in operation', ({ input, output }) => {
  const result = Calculator.execute(input);
  expect(result).toEqual(output);
});
