/**
 * @summary 118. Pascal's Triangle
 * @description https://leetcode.com/problems/pascals-triangle/
 * @author ccro
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1)  return []
  let rs = [[1]]
  for (let i = 1; i < numRows; i++) {
    rs[i] = []
    let lastRow = rs[i - 1]
    for (let j = 0; j <= i; j++) {
      let [a, b] = [lastRow[j - 1] || 0, lastRow[j] || 0]
      rs[i].push(a + b)
    }
  }
  return rs
};

/**************************/
let testCases = [
  {
    input: 5,
    output: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]
  }
]


let testFuns = {
  generate,
}

require('../TestFrame')(testCases, testFuns)