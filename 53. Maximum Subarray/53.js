/**
 * @summary 53. Maximum Subarray
 * @description https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // space:O(1); time: O(n)
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
  // console.log(start, end, nums.slice(start, end+1)) // display the ans sub array
  return max
}

var maxSubArray_DP = function(nums) { // space:O(n); time:O(n). Can optimize space with function maxSubArray
  if (!nums || nums.length == 0) return 0
  if (nums.length < 2) return nums[0]

  // max[i] = Math.max(max[i-1], max[i-1]+nums[i])
  let maxList = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    maxList[i] = Math.max(nums[i], maxList[i-1]+nums[i])
  }
  return Math.max(...maxList)
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
  maxSubArray_1,
  maxSubArray_DP
}

require('../TestFrame')(testCases, testFuns)