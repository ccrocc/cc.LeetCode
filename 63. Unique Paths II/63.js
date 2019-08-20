/**
 * @summary 63. Unique Paths II
 * @description https://leetcode.com/problems/unique-paths-ii/
 * @author ccro
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// O(n); *** rs[i][j] = rs[i - 1][j] + rs[i][j - 1]
var uniquePathsWithObstacles = function (obstacleGrid) {

  if (obstacleGrid.length == 0) return 0

  let [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
  let rs = []

  for (let i = 0; i <= m; i++) {
    rs[i] = []
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        rs[i][j] = 0
      } else if (i == 1 && j == 1) {
        rs[i][j] = 1 - obstacleGrid[0][0]
      } else {
        rs[i][j] = (obstacleGrid[i - 1][j - 1] === 1) ? 0 : rs[i - 1][j] + rs[i][j - 1]
      }
    }
  }

  return rs[m][n]
};

/**************************/
let testCases = [
  {
    input: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    output: 2
  },
  {
    input: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    output: 0
  },
  {
    input: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    output: 0
  },
  {
    input: [[0]],
    output: 1
  },
  {
    input: [],
    output: 0
  },
]

let testFuns = {
  uniquePathsWithObstacles
}

require('../TestFrame')(testCases, testFuns)