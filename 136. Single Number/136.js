/**
 * @summary 136. Single Number
 * @description https://leetcode.com/problems/single-number/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) { // space: O(m); time: O(n)
  let map = {}
  nums.forEach(num => {
    if (map.hasOwnProperty(num)) {
      delete map[num]
    } else {
      map[num] = true
    }
  })
  // assume just one single num
  return Object.keys(map)[0] || null
}

var singleNumberXOR = function(nums) { // space: O(1); time: O(n)
  let result = 0
  nums.forEach(num => {
    result ^= num
  })
  return result
}

var singleNumberMap = function(nums) { // space: O(m); time: O(n)
  let map = []
  nums.forEach(num => {
    if (map.indexOf(num) > -1) {
      map.splice(map.indexOf(num), 1)
    } else {
      map.push(num)
    }    
  });
  return map[0] || 0
};


/**************************/
let testCases = [
  {
    input: [2,2,1],
    output: 1,
  },
  {
    input: [4,1,2,1,2],
    output: 4,
  },
]

let testFuns = {
  singleNumber,
  singleNumberXOR,
  singleNumberMap,
}

require('../TestFrame')(testCases, testFuns)