/**
 * @summary 20. Valid Parentheses
 * @description https://leetcode.com/problems/valid-parentheses/
 * @author ccro
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = []
  var stack_top = ''
  for (const c of s) {
    // if (stack.length === 0 && [')', '}', ']'].includes(c)) return false
    if (stack.length === 0 && (c == ')' || c == '}' || c == ']')) return false
      
    // if ([')', '}', ']'].includes(c)) {
    if (c == ')' || c == '}' || c == ']') {
      stack_top = stack[stack.length - 1]
      if (c == ')' && stack_top != '(') break
      if (c == '}' && stack_top != '{') break
      if (c == ']' && stack_top != '[') break
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
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