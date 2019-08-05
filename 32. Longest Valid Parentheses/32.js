/**
 * @summary 32. Longest Valid Parentheses
 * @description https://leetcode.com/problems/longest-valid-parentheses/
 * @author ccro
 * @param {string} s
 * @return {number}
*/
var longestValidParentheses_BF = function (s) {

  let isVaildParentheses = (s) => {
    let stack = [], stack_top
    for (const c of s) {
      if (c == ')') {
        stack_top = stack.pop() || ''
        if (stack_top !== '(') {
          stack.push(stack_top)
        }
      } else {
        stack.push(c)
      }
    }
    return stack.length == 0
  }

  let max_len = 0
  let len = s.length
  let i, j
  for (i = 0; i < len; i++) {
    if (s.charAt(i) === ')') continue
    j = len
    while (s.charAt(j) === '(') {
      j--
    }
    while (j > i) {
      let sub_str = s.slice(i, j)
      if (isVaildParentheses(sub_str)) {
        max_len = Math.max(max_len, sub_str.length)
      }
      j--
    }
  }
  return max_len
};

/**

) ( ( ) ) ) ( ) ( ) (
0 1 2 3 4 5 6 7 8 9 10

 */
var longestValidParentheses = function (s) {
  let start = -1  // the start char position
  let max = 0  // max length  
  let stack = []  // to save the possible valid characters
  for (let i = 0, l = s.length; i < s.length; i++) {
    const c = s.charAt(i);    
    if (c == '(') {
      stack.push(i)
    } else {  // c == ')' or ''
      if (stack.length == 0) { // already pop all or the first char
        start = i
      } else {  // stack has the pos of char ‘(’
        stack.pop()
        if (stack.length == 0) {
          max = Math.max(max, i - start)
        } else {
          max = Math.max(max, i - stack[stack.length - 1])
        }
      }
    }
  }

  return max
}


/**************************/
let testCases = [
  {
    input: "(()",
    output: 2,
  },
  {
    input: ")()())",
    output: 4,
  },
  {
    input: "((())",
    output: 4,
  },
  {
    input: ")(()))()()(",
    output: 4,
  },
  {
    input: "())()()(())((()(()()(((()))((((())((()(())()())(()((((()))()(()))(())()(())(()(((((())((((((()())())(()(()((())()))(()))))))()(()))((((())()()()))()()()(((()(()())(()()(()(()()(((()))))))()()))())())((()()))))))((()))(((()((())()(()()))((())))()()())))))))()))))(()))))()))()))()((())))((()))(()))))))(((()))))))))()(()()()(())((())()))()()(())))()()))(()())()))(((()())()))((())((((()))(()(()(()()()(((())()(((((()))((()(((((())(()()))((((((((()(()(()(()(())))(())(()())())(()((((()(())((()(())))(())))()(((((()(()()(())))))))())(())(())(()()(((())))((()))(((((()))))())))()((()))()))))())))))((())(((((()()))((((())))(((()(()(())())(((()(()(()()()())))())()))((()((())())()()()(((())(((((()((((((()((()())))((((())((()(((((((()(()((()()()(()(()())(()(()()((((())))()(((()())))(()()))()(()()()()(((((())(()))))((()))())))()((((((()))())))()(()))(())))((((()())(((((()()())(((((())(()())(()))))()(()()))()))))))())))(((())(()(()()))(()))()(((())))())((((()(((()))))))()(()(()))()()(()()))))))))((()))))))(())((()((()))()))((((((()())))))(()((())((((()))))(()(()()()()(()))()()(()(()))(()()(((((((()())(())(()())((())())()(()())((())()())())(()())))())))(())())())(())((()())(((()()))()))()()))()(()(())((((((((())))()((())((()((((((((((()))))(()(((((())(()(()())())))((())())))))()))(()((()()))((()((())()()()((()(())())((())())(()()(((())))))())()()(()))()())(()(()((())))((((()()(())))())(())(()(()(())())())(()()())()(())())))(()()(((())))((()()(((())()()(()())((((()()(()())(()((((()(()()(()(()(((()((()())(()()))(()((((()(((((()))))()()))(((()((((((()(()()()()())()))(()(())))))((()(((()())())))(((()()))(()(()(((((((()()))(()(())))())()(())())(())(()))(())(()))()()(()()())))))()))()((())(((()((((((((())()()))())))((()())(",
    output: 310
  }
]

let testFuns = {
  // longestValidParentheses_BF,  // to slow
  longestValidParentheses,
}

require('../TestFrame')(testCases, testFuns)