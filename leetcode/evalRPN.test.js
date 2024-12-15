const evalRPN = require('./evalRPN');

it.each([
  {
    input: ['2', '1', '+', '3', '*'],
    output: 9,
  },
  {
    input: [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ],
    output: 22,
  },
  {
    input: ['4', '13', '5', '/', '+'],
    output: 6,
  },
  {
    input: ['4', '3', '-'],
    output: 1,
  },
])('should return the value correctly', ({ input, output }) => {
  const result = evalRPN(input);
  expect(result).toEqual(output);
});
