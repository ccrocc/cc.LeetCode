/**
 * @summary 171. Excel Sheet Column Number
 * @description https://leetcode.com/problems/excel-sheet-column-number/
 * @author ccro
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let len = s.length
  let result = 0
  for (let i = 0; i < len; i++) {
    let charNum = s[i].toLocaleUpperCase().charCodeAt() - 64
    result += Math.pow(26, len-i-1) * charNum
  }
  return result
};

/**
### Notes:
- char.charCodeAt() - 64; or I can use a map {'A':1,...}
- 'AAA' => Math.pow(26, 2)*1+Math.pow(26, 1)*1+Math.pow(26, 0)*1
 */

/**************************/
let testCases = [
  {
    input: "A",
    output: 1
  },
  {
    input: "AB",
    output: 28
  },
  {
    input: "ZY",
    output: 701
  },
  {
    input: "AAA",
    output: 703
  },
]

let testFuns = {
  titleToNumber
}

require('../TestFrame')(testCases, testFuns)