/**
 * @summary 151. Reverse Words in a String
 * @description https://leetcode.com/problems/reverse-words-in-a-string/
 * @author ccro
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};

var reverseWords_loop = function(s) {
  let arr = []  // to store the words
  // travel the string to get word  
  let word = ''
  for (let i = 0, len = s.length; i < len; i++) { // O(n)
    // build temp word
    if (s.charAt(i) !== ' ')  {
      word += s.charAt(i)
    }
    // push word to arr    
    if (s.charAt(i) == ' ' || (i == len - 1)) {
      word && arr.push(word)
      word = ''
    }
  }
  
  let rs = ''
  let i = arr.length - 1
  //for (let len = arr.length, i = len - 1; i > 0; i--) {
  while (arr[i]) {  // O(k); k << n
    rs += arr[i] + (i > 0 ? ' ' : '')
    i--
  }
  return rs
};

/**************************/
let testCases = [
  {
    input: "the sky is blue",
    output: "blue is sky the"
  },
  {
    input: "  hello world!  ",
    output: "world! hello"
  },
  {
    input: "a good   example",
    output: "example good a"
  },
]

let testFuns = {
  reverseWords,
  reverseWords_loop
}

require('../TestFrame')(testCases, testFuns)


