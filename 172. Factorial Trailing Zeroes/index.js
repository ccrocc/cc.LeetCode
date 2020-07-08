/**
 * @summary 172. Factorial Trailing Zeroes
 * @description https://leetcode.com/problems/factorial-trailing-zeroes/
 * @author ccro
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n == 0) return 0
  return Math.floor(n / 5) + trailingZeroes(n / 5)
}

var trailingZeroes_bad = function (n) { // bad while n get bigger
  let factorial = (n) => {
    if (!n || n < 2) return 1
    return n * factorial(n - 1)
  }
  let fact = factorial(n)
  let tailZeroCnt = 0
  while (fact % 10 == 0) {
    tailZeroCnt++
    fact = Math.floor(fact / 10)
  }
  return tailZeroCnt
};

/**************************/
let testCases = [{
    input: 3,
    output: 0,
  },
  {
    input: 5,
    output: 1,
  },
  {
    input: 8,
    output: 1,
  },
  {
    input: 20,
    output: 4,
  },
  {
    input: 30,
    output: 7,
  },
]


let testFuns = {
  trailingZeroes,
}

require('../TestFrame')(testCases, testFuns)