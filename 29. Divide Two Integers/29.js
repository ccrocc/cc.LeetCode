/**
 * @summary 29. Divide Two Integers
 * @description https://leetcode.com/problems/divide-two-integers/
 * @author ccro
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let max = Math.pow(2, 31)
  if (dividend > max - 1 || dividend < -max
    || divisor > max - 1 || divisor < -max 
    || divisor == 0) return 0
  
  let sign = 1
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) sign = -1

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let rs = 0 // counts for pow of 2
  if (divisor == 1) {
    rs = dividend
  } else if (dividend == divisor) {
    rs = 1
  } else {
    let rest = dividend, div = divisor
    while (divisor <= rest) {
      let i = 1
      while ((div << i) > 0 && (div << i) <= rest) {
        i++
      }
      rest -= div << --i
      rs += Math.pow(2, i)
    }
  }

  rs = sign > 0 ? rs : -rs
  if (rs && rs > max - 1) return max - 1
  if (rs && rs < -max) return -max
  return rs || 0
};

var divide_old = function (dividend, divisor) {
  let max = Math.pow(2, 31)
  if (dividend > max - 1 || dividend < -max
    || divisor > max - 1 || divisor < -max
    || divisor == 0) return 0

  let sign = 1
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) sign = -1

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let rs = 0
  while (dividend >= divisor) {
    dividend -= divisor
    rs++
  }

  rs = sign > 0 ? rs : -rs
  if (rs && rs > max - 1) return max - 1
  if (rs && rs < -max) return -max
  return rs || 0
};

/**************************/
let testCases = [
  {
    input: [10, 3],
    output: 3
  },
  {
    input: [7, -3],
    output: -2
  },
  {
    input: [1, 1],
    output: 1
  },
  {
    input: [-1, 1],
    output: -1
  },
  {
    input: [-123, 4],
    output: -30
  },
  {
    input: [-2147483648, -1],
    output: 2147483647
  },
  {
    input: [-2147483648, -1073741824],
    output: 2
  },
  {
    input: [-2147483648, -2147483648],
    output: 1
  },
]


let testFuns = {
  divide,
  // divide_old, // too slow
}

require('../TestFrame')(testCases, testFuns)