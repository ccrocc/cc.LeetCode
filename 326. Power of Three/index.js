/**
 * @summary 326. Power of Three
 * @description https://leetcode.com/problems/power-of-three/
 * @author ccro
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n == 0) return false
  let powerValue = 1 // pow(3, 0)
  while(true) {
    if (n == powerValue) return true
    if (powerValue > n) return false
    powerValue *= 3
  }
};

/**************************/
let testCases = [
  {
    input: 27,
    output: true
  },
  {
    input: 0,
    output: false
  },
  {
    input: 9,
    output: true
  },
  {
    input: 45,
    output: false
  }
]

let testFuns = {
  isPowerOfThree
}


require('../TestFrame')(testCases, testFuns)