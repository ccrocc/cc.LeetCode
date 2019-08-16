/**
 * @summary 119. Pascal's Triangle II
 * @description https://leetcode.com/problems/pascals-triangle-ii/
 * @author ccro
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let rs = []
  for (let i = 0; i <= rowIndex; i++) {
    rs[0] = rs[i] = 1
    for (let j = i-1; j > 0; j--) {
      rs[j] = rs[j] + rs[j-1]
    }
  }
  return rs
};

/**************************/
let testCases = [
  {
    input: 3,
    output: [1, 3, 3, 1],
  }
]


let testFuns = {
  getRow,
}

require('../TestFrame')(testCases, testFuns)