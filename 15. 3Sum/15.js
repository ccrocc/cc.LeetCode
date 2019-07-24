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
        let [a, b, c] = [nums[i], nums[j], nums[rest_index]].sort()
        rs.set(`${a}|${b}|${c}`, [a, b, c])
      }
    }
  }  
  return [...rs.values()].sort()
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
  let rs = new Map()
  nums.sort(function (a, b) { return a - b })
  // console.log('nums', nums);

  for (let i = 0, l = nums.length; i < l - 2; i++) {
    // while duplicate, go next
    while (i > 0 && i < l - 2 && nums[i - 1] == nums[i]) i++

    let j = i + 1, k = l - 1
    while (j < k) {
      let [a, b, c] = [nums[i], nums[j], nums[k]]
      let sum = nums[i] + nums[j] + nums[k]
      // console.log([i, j, k], [a, b, c], sum); 
      if (sum === 0) {
        rs.set(`${a}|${b}|${c}`, [a, b, c])
        // sort rs just for mocha
        // rs.set(`${a}|${b}|${c}`, [a, b, c].sort())
        k--
        j++
        // while duplicate, go next. ****
        while (j < k && nums[j - 1] == nums[j]) j++
        while (j < k && nums[k] == nums[k + 1]) k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }

  return [...rs.values()]
  // sort rs just for mocha
  // return [...rs.values()].sort()
};

/**************************/
let testCases = [
  {
    input: [-1, 0, 1, 2, -1, -4],
    output: [
      [-1, 0, 1],
      [-1, -1, 2]
    ].sort(),
  },
  {
    input: [0, 0, 0, 0],
    output: [
      [0, 0, 0],
    ].sort(),
  },
  {
    input: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
    output: [
      [-4, -2, 6].sort(),
      [-4, 0, 4].sort(), 
      [-4, 1, 3].sort(), 
      [-4, 2, 2].sort(), 
      [-2, -2, 4].sort(), 
      [-2, 0, 2].sort()
    ].sort(),
  },
]

let testFuns = {
  threeSum_BF,
  threeSum,
}

require('../TestFrame')(testCases, testFuns)