/**
 * @summary 7. Reverse Integer
 * @description https://leetcode.com/problems/reverse-integer/
 * @author ccro
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max = Math.pow(2, 31)
  if (x > max - 1 || x < -max) return 0
  let flag = x > 0 ? true : false
  let rs = 0, rest = Math.abs(x) 
  while (rest) {
    rs = rs*10 + rest%10
    rest = Math.floor(rest/10)
  }
  rs = flag ? rs : -rs
  if (rs > max - 1 || rs < -max) return 0
  return rs
};

/**************************/
var testCases = [
  {
    input: 123,
    output: 321
  },
  {
    input: 1534236469,
    output: 0
  },
  {
    input: 120,
    output: 21
  },
  {
    input: -123,
    output: -321
  },
]

let testFuns = {
  reverse,
}

require('../TestFrame')(testCases, testFuns)