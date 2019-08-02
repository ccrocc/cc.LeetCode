/**
 * @summary 150. Evaluate Reverse Polish Notation (RPN)
 * @description https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @author ccro
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN_old = function (tokens) {
  var isNumber = (s) => {
    // return typeof s === 'number' && isFinite(s)
    // return s === +s
    var reg = /^\-{0,1}[\d]+$/
    return reg.test(s)
  }
  let stack = []
  for (let i = 0; i < tokens.length; i++) {    
    if (isNumber(tokens[i])) {
      stack.push(tokens[i])
    } else {
      let [a, b] = [stack.pop(), stack.pop()]
      let tmp_rs = eval(`(${b}) ${tokens[i]} (${a})`) // eval is too slow...
      // carefully: Division between two integers should truncate toward zero.
      tmp_rs = tmp_rs > 0 ? Math.floor(tmp_rs) : Math.ceil(tmp_rs)
      stack.push(tmp_rs)
    }
  }
  return stack.pop()
};

var evalRPN = function (tokens) {
  let stack = []
  let a, b
  for (const s of tokens) {    
    switch (s) {
      case '+':
        [a, b] = [stack.pop(), stack.pop()]
        stack.push(+b + +a)
        break;
      case '-':
        [a, b] = [stack.pop(), stack.pop()]
        stack.push(b - a)
        break;
      case '*':
        [a, b] = [stack.pop(), stack.pop()]
        stack.push(b * a)
        break;
      case '/':
        [a, b] = [stack.pop(), stack.pop()]
        stack.push(parseInt(b / a))
        break;
      default:
        stack.push(s)
        break
    }
  }

  return stack.pop()
};


/**************************/
let testCases = [
  {
    input: ["2", "1", "+", "3", "*"],
    output: 9,
  },
  {
    input: ["4", "13", "5", "/", "+"],
    output: 6,
  },
  {
    input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
    output: 22,
  },
  {
    input: ["0", "3", "/"],
    output: 0,
  },
  // {
  //   input: ["3", "0", "/"],
  //   output: Infinity,
  // },
]

let testFuns = {
  evalRPN_old,
  evalRPN
}

require('../TestFrame')(testCases, testFuns)