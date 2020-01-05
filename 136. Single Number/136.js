/**
 * @summary 136. Single Number
 * @description https://leetcode.com/problems/single-number/
 * @author ccro
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
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
}

require('../TestFrame')(testCases, testFuns)