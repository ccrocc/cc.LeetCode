/**
 * @summary 268. Missing Number
 * @description https://leetcode.com/problems/missing-number/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {  // space: O(1); time: O(n)
  if (!nums || nums.length < 1) return 0
  let sum = nums.reduce((a, b) => a + b)
  let sumNeed = (nums.length *  (nums.length+1)) / 2
  return sumNeed - sum
}

// other solutions
// 1. sort the loop; time: O(nlogn)
// 2. with hashmap; space: O(n)


/**************************/
let testCases = [
  {
    input: [3,0,1],
    output: 2
  },
  {
    input: [9,6,4,2,3,5,7,0,1],
    output: 8
  },
  {
    input: [0],
    output: 1
  },
  {
    input: [],
    output: 0
  }
]

let testFuns = {
  missingNumber
}

require('../TestFrame')(testCases, testFuns)