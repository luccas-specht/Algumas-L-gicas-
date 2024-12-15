const topKFrequent = require('./topKFrequent');

it.only.each([
  {
    input: { nums: [1], k: 1 },
    output: [1],
  },
  /**
   * 
   * {
    input: {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
    },
    output: [1, 2],
  },
  {
    input: {
      nums: [-1, -1],
      k: 1,
    },
    output: [-1],
  },
  {
    input: {
      nums: [4, 1, -1, 2, -1, 2, 3],
      k: 2,
    },
    output: [-1, 2],
  },
   * 
  */
])('should return the top k frequent elements', ({ input, output }) => {
  const result = topKFrequent(input.nums, input.k);
  expect(output).toEqual(result);
});
