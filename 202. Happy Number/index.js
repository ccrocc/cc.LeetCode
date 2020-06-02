/**
 * @summary 202. Happy Number
 * @description https://leetcode.com/problems/happy-number/
 * @author ccro
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let resultMap = {}
  let getSqrtSum = (num) => {
    return num.toString().split('').reduce((sum, n) => (sum + Math.pow(parseInt(n), 2)), 0)
  }
  let checkNum = n
  while (true) {
    if (resultMap[checkNum]) return false
    resultMap[checkNum] = 1
    checkNum = getSqrtSum(checkNum)
    if (checkNum === 1)  return true
  }
};

/**************************/
let testCases = [
  {
    input: 19,
    output: true
  }
]

let testFuns = {
  isHappy
}


require('../TestFrame')(testCases, testFuns)