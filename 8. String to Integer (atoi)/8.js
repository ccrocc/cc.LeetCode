/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  var sign = ''
  var reg = /^[\d]$/
  var max = Math.pow(2, 31)
  var rs = null

  for (let i = 0, l = str.length; i < l; i++) {
    var char = str.charAt(i)
    if (rs === null && !sign && char === ' ') {
      continue
    } else if (rs === null && !sign && (char === '-' || char === '+')) {
      sign = char
      continue
    } else if (reg.test(char)) {
      rs = rs*10 + char*1
    } else {
      break
    }
  }

  rs = (rs && sign === '-') ? -rs : rs
  if (rs && rs > max - 1) return max - 1
  if (rs && rs < -max)  return -max
  return rs || 0
};



/**************************/
var testCases = [
  {
    input: 'words with 4193',
    output: 0
  },
  {
    input: '   +0 123',
    output: 0
  },
  {
    input: '-91283472332',
    output: -2147483648
  },
  {
    input: '04193',
    output: 4193
  },
  {
    input: '   - 42',
    output: 0
  },
  {
    input: '   0-42',
    output: 0
  },
  {
    input: '   -42',
    output: -42
  },
  {
    input: '4193 with words',
    output: 4193
  },
  {
    input: '0-1',
    output: 0
  },
]

let testFuns = {
  myAtoi,
}

require('../TestFrame')(testCases, testFuns)