/**
 * @summary 448. Find All Numbers Disappeared in an Array
 * @description https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @author ccro
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

  if (nums.length < 1) {
    return []
  }

  let numsMap = new Map(nums.map(num => [num, 1]))

  let rs = []
  for (var i = 1; i <= nums.length; i++) {
    if (numsMap.get(i) == undefined) {
      rs.push(i)      
    }
  }

  return rs
};

/**************************/
let testCases = [
  {
    input: [4,3,2,7,8,2,3,1],
    output: [5,6]
  }
  ,{
    input: [1,1],
    output: [2]
  }
  ,{
    input: [],
    output: []
  }
]

let testFuns = {
  findDisappearedNumbers
}

require('../TestFrame')(testCases, testFuns)