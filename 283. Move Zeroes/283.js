/**
 * @summary 283. Move Zeroes
 * @description https://leetcode.com/problems/move-zeroes/
 * @author ccro
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length, i = 0
  while (i < len) {
    if (nums[i] == 0) {
      nums.splice(i, 1)
      nums.push(0)
      len--
    } else {
      i++
    }
  }
  return nums
};


/**************************/
let testCases = [
  {
    input: [0,1,0,3,12],
    output: [1,3,12,0,0],
  },
]

let testFuns = {
  moveZeroes,
}

require('../TestFrame')(testCases, testFuns)