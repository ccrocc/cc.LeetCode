/**
 * @summary 31. Next Permutation
 * @description https://leetcode.com/problems/next-permutation/
 * @author ccro
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  if (!nums || len == 0) return []
  let firstSmall = null

  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      firstSmall = i
      break
    }
  }

  if (firstSmall === null) {
    return nums.sort((a, b) => (a - b))
  }

  for (let i = len - 1; i > firstSmall; i--) {
    // find the first large in the right
    if (nums[i] > nums[firstSmall]) {
      [nums[firstSmall], nums[i]] = [nums[i], nums[firstSmall]]
      // reverse
      let [m, n] = [firstSmall + 1, len - 1]
      while (m < n) {
        [nums[m], nums[n]] = [nums[n], nums[m]]
        m++
        n--
      }
      break
    }
  }

  // ??? doesn't work on leetcode ???
  // nums = nums.slice(0, firstSmall+1).concat(nums.slice(firstSmall+1, len).sort((a, b) => (a - b)))
  // nums = [].concat(...nums.slice(0, firstSmall + 1), ...nums.slice(firstSmall + 1, len).sort((a, b) => (a - b)));

  return nums
};

/**************************/
let testCases = [
  {
    input: [1, 2, 3],
    output: [1, 3, 2],
  },
  {
    input: [3, 2, 1],
    output: [1, 2, 3],
  },
  {
    input: [1, 1, 5],
    output: [1, 5, 1],
  },
  {
    input: [1, 2],
    output: [2, 1],
  },
  {
    input: [1, 3, 2],
    output: [2, 1, 3],
  },
]

let testFuns = {
  nextPermutation,
}

require('../TestFrame')(testCases, testFuns)