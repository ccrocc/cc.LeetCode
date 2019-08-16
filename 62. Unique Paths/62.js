/**
 * @summary 62. Unique Paths
 * @description https://leetcode.com/problems/unique-paths/
 * @author ccro
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var factorial = (i) => {
    return i > 0 ? i * factorial(i - 1) : 1
  }
  return factorial(m-1+n-1)/(factorial(m-1)*factorial(n-1))
};

/**************************/
let testCases = [
  {
    input: [3, 2],
    output: 3
  },
  {
    input: [7, 3],
    output: 28
  },
]

let testFuns = {
  uniquePaths
}

require('../TestFrame')(testCases, testFuns)