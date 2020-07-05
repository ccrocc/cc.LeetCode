/**
 * @summary 198. House Robber
 * @description https://leetcode.com/problems/house-robber/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */

/** 
 * n is the current len of nums
  DP(n) = Max(DP(n-2)+num(n), DP(n-1))
 */
var rob = function(nums) { 
  if (!nums || nums.length == 0)  return 0;
  if (nums.length == 1) return nums[0];
  const DP = [];
  DP[0] = nums[0];
  DP[1] = Math.max(nums[0], nums[1]);
  for (let n = 2; n < nums.length; n++) {
    DP[n] = Math.max(DP[n-2]+nums[n], DP[n-1])
  }
  return DP[nums.length - 1]
};

/**************************/
let testCases = [
  {
    input:  [1,2,3,1],
    output: 4
  },
  {
    input: [2,7,9,3,1],
    output: 12
  },
  {
    input: [2,7,9,3,1,5,2],
    output: 16
  }
]

let testFuns = {
  rob
}


require('../TestFrame')(testCases, testFuns)