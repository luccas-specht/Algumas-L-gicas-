const calPoints = require('./baseballGame');

it.each([
  {
    input: ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
    output: 27,
  },
  {
    input: ['1', 'C'],
    output: 0,
  },
  {
    input: ['5', '2', 'C', 'D', '+'],
    output: 30,
  },
])('should return sum of records correctly', ({ input, output }) => {
  const result = calPoints(input);
  expect(result).toEqual(output);
});
