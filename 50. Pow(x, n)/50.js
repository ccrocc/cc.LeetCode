/**
 * @summary 50. Pow(x, n)
 * @description https://leetcode.com/problems/powx-n/
 * @author ccro
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {  
  if (x == 1 || n == 0) return 1.0
  if (n == 1) return x  
  if (n < 0)  return 1 / myPow(x, -n)
  if (n%2 == 0) {
    let p = myPow(x, n/2)
    return p * p
  } else {
    return x * myPow(x, n - 1)
  }
};

/**************************/
let testCases = [
  {
    input: [2.00000, 10],
    output: 1024.00000,
  },
  {
    input: [2.10000, 3],
    output: 9.26100,
  },
  {
    input: [2.00000, -2],
    output: 0.25000,
  },
  {
    input: [1.00001, 123456],
    output: 3.43684,
  },
]

let testFuns = {
  myPow: (x, n) => {
    return myPow(x, n).toFixed(5)
  },
}

require('../TestFrame')(testCases, testFuns)