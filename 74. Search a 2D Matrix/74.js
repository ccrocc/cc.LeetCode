/**
 * @summary 74. Search a 2D Matrix
 * @description https://leetcode.com/problems/search-a-2d-matrix/
 * @author ccro
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// O(m+logn); using binary search
var searchMatrix = function (matrix, target) {

  var searchRow = (row, target) => {
    let [left, right] = [0, row.length - 1]
    while (left <= right) {
      let mid = parseInt((left + right) / 2)
      if (target > row[mid]) {
        left = mid + 1
      } else if (target < row[mid]) {
        right = mid - 1
      } else {
        return true
      }
    }
    return false
  }

  for (const row of matrix) {
    if (row && row.length > 0 && target <= row[row.length - 1]) {
      return searchRow(row, target)
    }
  }
  return false
};

// O(m+n)
var searchMatrix_s1 = function (matrix, target) {
  for (const row of matrix) {
    let [row_l, row_r] = [row[0], row[row.length - 1]] 
    if (target > row_r || target < row_l) continue
    else if (target == row_r || target == row_l) {
      return true
    } else {
      for (let i = 1; i < row.length - 1; i++) {
        if (row[i] == target) return true 
      }
    }
  }
  return false
};


/**************************/
let testCases = [
  {
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
      3
    ],
    output: true,
  },
  {
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
      13
    ],
    output: false,
  },
]

let testFuns = {
  searchMatrix,
}

require('../TestFrame')(testCases, testFuns)