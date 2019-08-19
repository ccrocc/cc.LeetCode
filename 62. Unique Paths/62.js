/**
 * @summary 62. Unique Paths
 * @description https://leetcode.com/problems/unique-paths/
 * @author ccro
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// recursive
var uniquePaths = function (m, n) {
  // if (m <= 0 || n <= 0) return 0
  // if (m == 1 && n == 1) return 1

  let rs = [] // store the ans of paths num with [m][n]

  for (let i = 0; i <= m; i++) {
    rs[i] = []
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) rs[i][j] = 0
      else if (i == 1 || j == 1) rs[i][j] = 1
      else {
        rs[i][j] = rs[i - 1][j] + rs[i][j - 1]
      }
    }
  }

  return rs[m][n]
};



// recursive s1
var arr = []
var uniquePaths_s1 = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  if (m == 1 && n == 1) return 1
    
  if (!arr[`${m}|${n}`]) {
    arr[`${m}|${n}`] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  }
  return arr[`${m}|${n}`]
};

// math
var uniquePaths_s0 = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  if (m == 1 && n == 1) return 1

  var factorial = (i) => {
    return i > 0 ? i * factorial(i - 1) : 1
  }
  return parseInt(factorial(m - 1 + n - 1) / (factorial(m - 1) * factorial(n - 1)))
};

/**************************/
let testCases = [
  {
    input: [0, 0],
    output: 0
  },
  {
    input: [1, 1],
    output: 1
  },
  {
    input: [3, 2],
    output: 3
  },
  {
    input: [7, 3],
    output: 28
  },
  {
    input: [51, 9],
    output: 1916797311
  },
]

let testFuns = {
  uniquePaths,
  uniquePaths_s1,
  uniquePaths_s0
}

require('../TestFrame')(testCases, testFuns)