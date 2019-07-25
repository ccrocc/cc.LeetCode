/**
16. 3Sum Closest
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => (a - b))

  let closest = nums[0] + nums[1] + nums[nums.length - 1]

  for (let i = 0, l = nums.length; i < l - 2; i++) {
    // *** while duplicate, go next
    while (i > 0 && i < l - 2 && nums[i - 1] == nums[i]) i++

    let [j, k] = [i + 1, l - 1]
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum == target)  return sum 
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }
      // *** while sum is greater, let get a smaller num (k--)
      if (sum - target > 0) {
        // while duplicate, go next. ****
        k--
        while (j < k && nums[k] == nums[k + 1]) k--
      } else {
        j++
        while (j < k && nums[j - 1] == nums[j]) j++
      }
    }
  }
  return closest
};


/**************************/
let testCases = [
  {
    input: [
      [-1, 2, 1, -4],
      1
    ],
    output: 2,
  },
  {
    input: [
      [0, 2, 1, -3],
      1
    ],
    output: 0,
  },
  {
    input: [
      [1, 1, -1, -1, 3],
      -1
    ],
    output: -1,
  },
  {
    input: [
      [1, 2, 4, 8, 16, 32, 64, 128],
      82
    ],
    output: 82,
  },
]

let testFuns = {
  threeSumClosest,
}

require('../TestFrame')(testCases, testFuns)