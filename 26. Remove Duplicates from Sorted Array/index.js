/**
 * @summary 26. Remove Duplicates from Sorted Array
 * @description https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length == 0) return []
  if (nums.length == 1) return nums
  let i = 0;
  let end = 1;  // end means the unique nums end position
  while (i < nums.length - 1) {
    // check i and i+1; if i+1 not equal i, set end with i+1 value
    if (nums[i] !== nums[i+1]) {
      nums[end] = nums[i+1]
      end++
    }
    i++
  }
  nums.splice(end)
  return nums
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