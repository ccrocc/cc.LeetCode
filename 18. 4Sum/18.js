/**
18. 4Sum

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => (a - b))

  let rs = new Map()
  // let rs = []
  let m, n, sum

  for (let i = 0, len = nums.length; i < len - 3; i++) {    
    // while (i > 1 && i < len - 3 && nums[i - 1] == nums[i]) i++
    // reset j in i loop
    for (let j = len - 1; j > i + 2; j--) {
      [m, n] = [i + 1, j - 1]
      while (m < n) {
        sum = nums[i] + nums[m] + nums[n] + nums[j]
        if (sum == target) {
          rs.set(`${nums[i]}|${nums[m]}|${nums[n]}|${nums[j]}`, [nums[i], nums[m], nums[n], nums[j]])
          // rs.push([nums[i], nums[m], nums[n], nums[j]])
        }
        if (sum > target) {
          n--
          // while (m < n && nums[n] == nums[n + 1]) n--
        } else {
          m++
          // while (m < n && nums[m] == nums[m - 1]) m++
        }
      }
    }
  }

  return [...rs.values()]
  // return rs
};


/**************************/
let testCases = [
  {
    input: [
      [1, 0, -1, 0, -2, 2],
      0
    ],
    output: [
      [-1, 0, 0, 1],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2]
    ],
  },
  {
    input: [
      [5, 5, 3, 5, 1, -5, 1, -2],
      4
    ],
    output: [
      [-5, 1, 3, 5]
    ],
  },
]

testCases.forEach(e => {
  e.output.forEach(e => e.sort())
  e.output.sort()
  return e
});

let testFuns = {
  fourSum: (nums, target) => {
    let rs = fourSum(nums, target)
    rs.forEach(e => e.sort());
    return rs.sort()
  }
}

require('../TestFrame')(testCases, testFuns)