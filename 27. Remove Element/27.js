/**
 * @summary 27. Remove Element
 * @description https://leetcode.com/problems/remove-element/
 * @author ccro
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement_o = function (nums, val) {
  let index = nums.findIndex(e => (e == val))  
  while (index > -1) {
    // nums = nums.slice(0, index).concat(nums.slice(index + 1, nums.length))
    nums.splice(index, 1)
    index = nums.findIndex(e => (e == val))
  }
  return nums.length
};

var removeElement = function (nums, val) {
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--;
    }
  };
  return nums.length;
};


/**************************/
let testCases = [
  {
    input: [
      [0, 1, 2, 2, 3, 0, 4, 2],
      2
    ],
    // output: [0, 1, 3, 0, 4],
    output: 5,
  },
  {
    input: [
      [3, 2, 2, 3],
      3
    ],
    // output: [2, 2],
    output: 2,
  },
]

let testFuns = {
  removeElement_o,
  removeElement,
}

require('../TestFrame')(testCases, testFuns)