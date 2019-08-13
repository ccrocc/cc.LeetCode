/**
 * @summary 128. Longest Consecutive Sequence
 * @description https://leetcode.com/problems/longest-consecutive-sequence/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {  // solution 2

  var map = new Map(nums.map(n => [n, 1]));

  let max = 0
  for (let num of nums) {
    if (map.has(num - 1)) continue

    let len = 1    
    while (map.has(++num)) {
      len++
    }
    max = Math.max(max, len)
  }
  
  return max
};

var longestConsecutive_s1 = function (nums) {
  let stack = new Map()  // key: nums[i]; val: max length
  let max = 0, len = 0
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]

    if (stack.has(n)) continue

    let l_len = stack.has(n - 1) ? stack.get(n - 1) : 0
    let r_len = stack.has(n + 1) ? stack.get(n + 1) : 0

    len = l_len + r_len + 1
    stack.set(n, len)
    stack.set(n - l_len, len)
    stack.set(n + r_len, len)

    max = Math.max(max, len)
  }
  
  return max
};

// should be O(n)
// each num, test its left and right in the stack, if exist, and length.
// https://www.youtube.com/watch?v=rc2QdQ7U78I
var longestConsecutive_s1_old = function (nums) {
  let stack = {}//new Map()  // key: nums[i]; val: max length
  let max = 0, len = 0
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]

    if (stack[n] !== undefined) continue

    if (stack[n - 1] === undefined && stack[n + 1] === undefined) {
      stack[n] = len = 1
    } else if (stack[n - 1] === undefined && stack[n + 1] !== undefined) {
      let r_len = stack[n + 1]
      stack[n] = stack[n + r_len] = len = r_len + 1
    } else if (stack[n - 1] !== undefined && stack[n + 1] === undefined) {
      let l_len = stack[n - 1]
      stack[n] = stack[n - l_len] = len = l_len + 1
    } else if (stack[n - 1] !== undefined && stack[n + 1] !== undefined) {
      let [l_len, r_len] = [stack[n - 1], stack[n + 1]]
      stack[n] = stack[n - l_len] = stack[n + r_len] = len = l_len + r_len + 1
    }

    max = Math.max(max, len)
  }
  return max
};

// should be O(n*m)
var longestConsecutive_s0 = function (nums) {
  let stack = new Map()  // key: nums[i]; val: length

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i], left = n, right = n
    let len = 1

    while (stack[--left]) {
      len++
    }

    while (stack[++right]) {
      len++
    }

    if (stack[n - 1]) {
      stack[left + 1] = len
    }
    if (stack[n + 1]) {
      stack[right - 1] = len
    }
    stack[n] = len

    max = Math.max(max, len)
  }

  return max
};

/**************************/
let testCases = [
  {
    input: [100, 4, 200, 1, 3, 2],
    output: 4
  },
  {
    input: [],
    output: 0
  },
  {
    input: [1, 2, 0, 1],
    output: 3
  },
  {
    input: [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3],
    output: 5
  }
]


let testFuns = {
  longestConsecutive,
  longestConsecutive_s1,
  longestConsecutive_s1_old,
  longestConsecutive_s0,
}

require('../TestFrame')(testCases, testFuns)