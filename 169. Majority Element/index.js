/**
 * @summary 169. Majority Element
 * @description https://leetcode.com/problems/majority-element/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
// with sort
var majorityElement = function(nums) {  // space: O(1); time: O(nlogn)
  if (!nums || nums.length < 1) return 0
  // The majority element is the element that appears more than ⌊ n/2 ⌋ times.
  // So, after sort desc, the first one in the right half will be the answer
  return nums.sort((a, b) => (b - a))[nums.length>>1]
}

var majorityElementWithMap = function(nums) {  // space: O(m); time: O(n)
  if (!nums || nums.length < 1) return 0
  let map = {}, maxLen = 0, maxNum = 0
  nums.forEach(num => {
    map[num] = (map[num] || 0) + 1
    if (map[num] > maxLen) {
      maxLen = map[num]
      maxNum = num
    }
  })
  return maxNum
  // return Object.entries(map).sort((a, b) => (b[1] - a[1]))[0][0]
};


/**************************/
let testCases = [
  {
    input: [2,2,1,3,1,1,4,1,1,5,1,1,6],
    output: 1
  },
  {
    input: [3,2,3],
    output: 3
  },
  {
    input: [2,2,1,1,1,2,2],
    output: 2
  },
  {
    input: [2],
    output: 2
  },
  {
    input: [],
    output: 0
  }
]

let testFuns = {
  majorityElement,
  majorityElementWithMap,
}

require('../TestFrame')(testCases, testFuns)