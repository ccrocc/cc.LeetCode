/**
 * @summary 20. Valid Parentheses
 * @description https://leetcode.com/problems/valid-parentheses/
 * @author ccro
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const stackTop = stack.pop();
    if (stackTop) {
      if (stackTop+s[i] !== '{}' && stackTop+s[i] !== '()' && stackTop+s[i] !== '[]') {
        stack.push(stackTop)
        stack.push(s[i])
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.length == 0
}

var isValid_old = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const stackTop = stack.pop();
    if (stackTop) {
      if (stackTop == '{' && s[i] == '}') {
        // do nothing
      } else if (stackTop == '(' && s[i] == ')') {
        // do nothing
      } else if (stackTop == '[' && s[i] == ']') {
        // do nothing
      } else {
        stack.push(stackTop)
        stack.push(s[i])
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.length == 0
};


/**************************/
let testCases = [
  {
    input: "]",
    output: false,
  },
  {
    input: "()",
    output: true,
  },
  {
    input: "()[]{}",
    output: true,
  },
  {
    input: "(]",
    output: false,
  },
  {
    input: "([)]",
    output: false,
  },
  {
    input: "()",
    output: true,
  },
]


let testFuns = {
  isValid,
}

require('../TestFrame')(testCases, testFuns)