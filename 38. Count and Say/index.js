/**
 * @summary 38. Count and Say
 * @description https://leetcode.com/problems/count-and-say/
 * @author ccro
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  const rs = []
  rs[1] = "1"

  var say = (str) => {
    if (!str) return ''
    let cnt = 0;
    let sayStr = ''
    for (let i = 0; i < str.length; i++) {
      cnt++
      // to say if end or next one not equal current
      if (!str[i+1] || str[i+1]!==str[i]) {
        sayStr += `${cnt}${str[i]}`
        cnt = 0
      }
    }
    return sayStr
  }

  for (let i = 2; i <= n; i++){
    rs[i] = say(rs[i-1])
  }
  return rs[n]
};
/**
1.     1
2.     11
3.     21
4.     1211
5.     111221
 */


/**************************/
let testCases = [
  {
    input:  1,
    output: "1"
  },
  {
    input: 4,
    output: "1211"
  }
]

let testFuns = {
  countAndSay
}


require('../TestFrame')(testCases, testFuns)