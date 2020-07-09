/**
 * @summary 189. Rotate Array
 * @description https://leetcode.com/problems/rotate-array/
 * @author ccro
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {  //space: O(1); time: O(n)
  const numsLen = nums.length
  k = k % numsLen // * k may be bigger than nums length
  for (let i = nums.length - 1; i >= 0 ; i--) {
    nums[i+k] = nums[i]
  }
  for (let i = 0; i < k; i++) {
    nums[i] = nums[numsLen+i]
  }
  for (let i = 0; i < k; i++) {
    nums.pop()
  }
  return nums
}

var rotate_BF = function(nums, k) {  // space: O(1), time: O(kn)
  const rotateStep = nums => {
    if (!nums || nums.length<2) return nums
    let rotateNum = nums.pop()
    for (let i = nums.length - 1; i >= 0 ; i--) {
      nums[i+1] = nums[i] // move the nums
    }
    nums[0] = rotateNum
    return nums
  }
  k = k % numsLen // * k may be bigger than nums length
  while (k-- > 0) {         // O(kn)
    nums = rotateStep(nums) // O(n)
  }
  return nums
};


var rotate_slice = function(nums, k) {
  k = k % numsLen // * k may be bigger than nums length
  return [...nums.slice(-k), ...nums.slice(0, nums.length - k)]
};

/**************************/
let testCases = [
  {
    input:  [[1,2,3,4,5,6,7], 3],
    output: [5,6,7,1,2,3,4]
  },
  {
    input: [[-1,-100,3,99], 2],
    output: [3,99,-1,-100]
  },
  {
    input: [[1,2], 3],
    output: [2, 1]
  }
]

let testFuns = {
  rotate
}


require('../TestFrame')(testCases, testFuns)