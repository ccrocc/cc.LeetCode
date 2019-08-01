/**
 * @summary 35. Search Insert Position
 * @description https://leetcode.com/problems/search-insert-position/
 * @author ccro
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index, len = nums.length
  for (let i = 0; i <= len; i++) {
    index = i
    if (nums[i] >= target) break
  }
  return index
};


/**************************/
let testCases = [
  {
    input: [
      [1, 3, 5, 6],
      5
    ],
    output: 2,
  },
  {
    input: [
      [1, 3, 5, 6],
      2
    ],
    output: 1,
  },
  {
    input: [
      [1, 3, 5, 6],
      7
    ],
    output: 4,
  },
  {
    input: [
      [1, 3, 5, 6],
      0
    ],
    output: 0,
  },
]

let testFuns = {
  searchInsert,
}

require('../TestFrame')(testCases, testFuns)