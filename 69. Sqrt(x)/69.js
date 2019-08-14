/**
 * @summary 69. Sqrt(x)
 * @description https://leetcode.com/problems/sqrtx/
 * @author ccro
 * @param {number} x
 * @return {number}
 */
// Binary Search, O(logn)
var mySqrt = function (x) {
  if (x < 2) return x
  let [left, right] = [2, parseInt(x / 2)]
  while (left < right) {
    let mid = parseInt((left + right) / 2)
    let sqrt = mid * mid
    if (sqrt > x) {
      right = mid - 1
    } else if (sqrt < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
};


/**************************/
let testCases = [
  {
    input: 4,
    output: 2,
  },
  {
    input: 8,
    output: 2,
  },
  {
    input: 3,
    output: 1,
  },
]

let testFuns = {
  mySqrt,
}

require('../TestFrame')(testCases, testFuns)