const minimumRemoveToMakeValidParentheses = require('./minimumRemoveToMakeValidParentheses');

it.each([
  {
    input: 'lee(t(c)o)de)',
    output: 'lee(t(c)o)de',
  },
  {
    input: 'a)b(c)d',
    output: 'ab(c)d',
  },
  {
    input: '))((',
    output: '',
  },
])('should return the value correctly', ({ input, output }) => {
  const result = minimumRemoveToMakeValidParentheses(input);
  expect(result).toEqual(output);
});
