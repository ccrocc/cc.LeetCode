/**
 * @summary 53. Maximum Subarray
 * @description https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
var maxSubArray = function(nums) {
  let maxCur = max = nums[0]
  nums.slice(1).forEach(num => {
    maxCur = Math.max(num, maxCur + num)
    max = Math.max(max, maxCur)
  })
  return max
};


var maxSubArray_1 = function(nums) {
  let maxCur = max = nums[0], start = end = 0;
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] > maxCur + nums[i]) start = i 
    maxCur = Math.max(nums[i], maxCur + nums[i])
    if (maxCur > max) end = i
    max = Math.max(max, maxCur)
  }
  console.log(start, end, nums.slice(start, end+1)) // display the ans sub array
  return max
}

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
  maxSubArray_1
}

require('../TestFrame')(testCases, testFuns)