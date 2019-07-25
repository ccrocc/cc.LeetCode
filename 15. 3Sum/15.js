/**
15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_BF = function (nums) {
  let rs = new Map()
  // nums = Array.from(new Set(nums)).sort(function (a, b) { return a > b })
  nums.sort(function(a, b) {return a - b})
  
  for (let i = 0, l = nums.length; i < l - 2; i++) {
    // if (i - 1 > 0 && nums[i - 1] == nums[i]) continue
    for (let j = i + 1; j < l - 1; j++) {
      var rest = - nums[i] - nums[j]
      var rest_index = nums.indexOf(rest, j + 1)   
      if (rest_index > 0) {
        let [a, b, c] = [nums[i], nums[j], nums[rest_index]]
        rs.set(`${a}|${b}|${c}`, [a, b, c])
      }
    }
  }  
  return [...rs.values()]
};

/**
[-1, 0, 1, 2, -1, -4]
sort
[-4, -1, -1, 0, 1, 2]
  i   j            k
loop(i) & test sum
        j->     <-k
 */
var threeSum = function (nums) {
  let rs = []
  nums.sort((a, b) => (a - b))

  for (let i = 0, l = nums.length; i < l - 2; i++) {
    // while duplicate, go next
    while (i > 0 && i < l - 2 && nums[i - 1] == nums[i]) i++

    let j = i + 1, k = l - 1
    while (j < k) {
      let [a, b, c] = [nums[i], nums[j], nums[k]]
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        rs.push([a, b, c])
      }
      if (sum > 0) {
        k--
        // while duplicate, go next. ****
        while (j < k && nums[k] == nums[k + 1]) k--
      } else {
        j++
        while (j < k && nums[j - 1] == nums[j]) j++
      }
    }
  }

  return rs
};

/**************************/
let testCases = [
  {
    input: [-1, 0, 1, 2, -1, -4],
    output: [
      [-1, 0, 1],
      [-1, -1, 2]
    ],
  },
  {
    input: [0, 0, 0, 0],
    output: [
      [0, 0, 0],
    ],
  },
  {
    input: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
    output: [
      [-4, -2, 6],
      [-4, 0, 4], 
      [-4, 1, 3], 
      [-4, 2, 2], 
      [-2, -2, 4], 
      [-2, 0, 2]
    ],
  },
]

testCases.forEach(e => {
  e.output.forEach(e => e.sort())
  e.output.sort()
  return e
});

let testFuns = {
  threeSum_BF: (nums) => {
    let rs = threeSum_BF(nums)
    rs.forEach(e => e.sort());
    return rs.sort()
  },
  threeSum: (nums) => {
    let rs = threeSum(nums)
    rs.forEach(e => e.sort());
    return rs.sort()
  }
}

require('../TestFrame')(testCases, testFuns)