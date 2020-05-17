/**
 * @summary 371. Sum of Two Integers
 * @description https://leetcode.com/problems/sum-of-two-integers/
 * @author ccro
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  while (b != 0) {
    [a, b] = [a ^ b, (a & b) << 1]
  }
  return a;
};

/**
1. `&` AND operator
- 0&0=0;  0&1=0;  1&0=0;  1&1=1;
- 3&5 =>  0000 0011 
        & 0000 0101 = 0000 0001 => 1
2. `|` OR operator
- 0|0=0;  0|1=1;  1|0=1;  1|1=1;
- 3|5 =>  0000 0011 
        | 0000 0101 = 0000 0111 => 7
3. `^` Exclusive OR operator
- 0^0=0;  0^1=1;  1^0=1;  1^1=0;
- 3^5 =>  0000 0011 
        ^ 0000 0101 = 0000 0110 => 6
 */



/**************************/
let testCases = [
  {
    input: [1,2],
    output: 3,
  },
  {
    input: [-2,3],
    output: 1,
  },
]

let testFuns = {
  getSum
}

require('../TestFrame')(testCases, testFuns)