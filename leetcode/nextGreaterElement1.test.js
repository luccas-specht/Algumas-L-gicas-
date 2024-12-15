const nextGreaterElement = require('./nextGreaterElement1');

it.each([
  {
    input: {
      nums1: [4, 1, 2],
      nums2: [1, 3, 4, 2],
    },
    output: [-1, 3, -1],
  },
  {
    input: {
      nums1: [2, 4],
      nums2: [1, 2, 3, 4],
    },
    output: [3, -1],
  },
])('should return sum of records correctly', ({ input, output }) => {
  const result = nextGreaterElement(input.nums1, input.nums2);
  expect(result).toStrictEqual(output);
});
