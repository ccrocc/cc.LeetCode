/**
 * @summary 217. Contains Duplicate
 * @description https://leetcode.com/problems/contains-duplicate/
 * @author ccro
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {  // space: O(1); time: O(nlogn)
  nums.sort((a, b) => (a - b))
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) return true
  }
  return false
};

var containsDuplicateWithMap = function(nums) {  // space: O(m); time: O(n) - worst
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true
    map[nums[i]] = true
  }
  return false
};


/**************************/
let testCases = [
  {
    input: [1,2,3,1],
    output: true
  },
  {
    input: [1,2,3,4],
    output: false
  },
  {
    input: [1,1,1,3,3,4,3,2,4,2],
    output: true
  }
]

let testFuns = {
  containsDuplicate,
  containsDuplicateWithMap
}

require('../TestFrame')(testCases, testFuns)