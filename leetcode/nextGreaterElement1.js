/**
 * 
 *  nums1: [4, 1, 2],
    nums2: [1, 3, 4, 2],
    
    output: [-1, 3, -1],

 */


// => R: O(m * n) S: (1)
var nextGreaterElement = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    let j = 0;

    while (nums1[i] !== nums2[j] && j <= nums2.length) {
      j++;
    }

    for (let k = j; k < nums2.length; k++) {
      let nextElementGreater = nums2[k + 1];

      if (nextElementGreater || nextElementGreater === 0) {
        if (nextElementGreater > nums1[i]) {
          nums1[i] = nextElementGreater;
          break;
        }
      } else {
        nums1[i] = -1;
      }
    }
  }
  return nums1;
};

module.exports = nextGreaterElement;
