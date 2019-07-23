/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max = Math.pow(2, 31)
  if (x > max - 1 || x < -max) return 0
  var map = []
  var rs = 0
  var y = Math.abs(x)
  while (y>0) {
    map.push(y % 10)
    y = Math.floor(y/10)
  }
  for (let i = 0, l = map.length; i < l; i++) {
    rs += Math.pow(10, l-1-i) * map[i]
  }
  rs = x < 0 ? -rs : rs
  return  (rs > max - 1 || rs < -max) ? 0 : rs
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