/**
 * @summary 53. Maximum Subarray
 * @description https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxCur = max = nums[0]
  nums.slice(1).forEach(num => {
    maxCur = Math.max(num, maxCur + num)
    max = Math.max(max, maxCur)
  })
  return max
};


/**************************/
let testCases = [
  {
    input: [-2,1,-3,4,-1,2,1,-5,4],
    output: 6, // [4,-1,2,1]
  },
  {
    input: [1],
    output: 1,
  },
  {
    input: [-2, 1],
    output: 1,
  }
]


let testFuns = {
  maxSubArray,
}

require('../TestFrame')(testCases, testFuns)