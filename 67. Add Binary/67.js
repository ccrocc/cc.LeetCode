/**
 * @summary 67. Add Binary
 * @description https://leetcode.com/problems/add-binary/
 * @author ccro
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let a_len = a.length
  if (a.length == 0) return b
  let b_len = b.length
  if (b.length == 0) return a
  let len = Math.max(a_len, b_len)
  let rest = 0, sum = 0
  let rs = ''
  while(len-- > 0) {
    sum = (+a.charAt(--a_len) || 0) + (+b.charAt(--b_len) || 0) + rest
    rest = sum > 1 ? 1 : 0
    rs = sum%2 + rs    
  }
  return rest ? rest + rs : rs
};


/**************************/
let testCases = [
  {
    input: ['11', '1'],
    output: '100',
  },
  {
    input: ['1010', '1011'],
    output: '10101',
  },
]

let testFuns = {
  addBinary,
}

require('../TestFrame')(testCases, testFuns)