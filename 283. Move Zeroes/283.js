/**
 * @summary 283. Move Zeroes
 * @description https://leetcode.com/problems/move-zeroes/
 * @author ccro
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**

input: 0 1 0 3 12
  i = 1  leftZero=0
1st:   1 0 0 3 12; swap i and leftZero; leftZero++
  i = 2  leftZero=1
2st:   1 0 0 3 12; nums[i] is 0, do nothing
  i = 3  leftZero=1
3rd:   1 3 0 0 12; swap; leftZero++
  i = 4  leftZero=2
4th:   1 3 12 0 0; swap
  done
 */

var moveZeroes = function(nums) { // space: O(1); time: O(n)
  let leftZero = null
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] == 0 && leftZero == null) {
      leftZero = i-1  // this is the first zero index
    }
    if (nums[i] !== 0 && nums[i-1] == 0) {
      [nums[i], nums[leftZero]] = [nums[leftZero], nums[i]]
      leftZero++  // every time move 1 item in the front, so first zero index+1
    }
  }
  return nums
};

var moveZeroesOld = function(nums) {
  let len = nums.length, i = 0
  while (i < len) {
    if (nums[i] == 0) {
      nums.splice(i, 1)
      nums.push(0)
      len--
    } else {
      i++
    }
  }
  return nums
};


/**************************/
let testCases = [
  {
    input: [0,1,0,3,12],
    output: [1,3,12,0,0],
  },
  {
    input: [0,0,1],
    output: [1,0,0],
  },
]

let testFuns = {
  moveZeroes,
  moveZeroesOld
}

require('../TestFrame')(testCases, testFuns)