/**
 * @summary 66. Plus One
 * @description https://leetcode.com/problems/plus-one/
 * @author ccro
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {// O(n)
  if (!digits || digits.length == 0) return 1;
  let add = 1;  // the num to be add in each position
  for (let i = digits.length-1; i >= 0; i--){
    [digits[i], add] = [(digits[i] + add) % 10, Math.floor((digits[i] + add) / 10)]
  }
  return add == 0 ? digits : [add, ...digits]
};

/**************************/
let testCases = [
  {
    input:  [1,2,3],
    output: [1,2,4]
  },
  {
    input: [4,3,2,1],
    output: [4,3,2,2]
  },
  {
    input: [9,9,9],
    output: [1, 0, 0, 0]
  }
]

let testFuns = {
  plusOne
}


require('../TestFrame')(testCases, testFuns)