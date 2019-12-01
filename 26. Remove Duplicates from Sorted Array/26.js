/**
 * @summary 26. Remove Duplicates from Sorted Array
 * @description https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  // don't use nums[i] to check, avoid nums[i]=0
  // better not use typeof(nums[i]) !== 'undefined'; cause sometimes i can be 'undefined'
  while (nums.hasOwnProperty(i)) { 
    i++    
    if (nums.hasOwnProperty(i) && nums[i]==nums[i-1]) {
      nums.splice(i,1)
      i--
    }
  }
  return nums // no need return in leetcode online compiler
};

/**************************/
let testCases = [
  {
    input: [1,1,2],
    output: [1,2],
  },
  {
    input: [0,0,1,1,1,2,2,3,3,4],
    output: [0,1,2,3,4],
  },
]


let testFuns = {
  removeDuplicates,
}

require('../TestFrame')(testCases, testFuns)