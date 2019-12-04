/**
 * @summary 409. Longest Palindrome
 * @description https://leetcode.com/problems/longest-palindrome/
 * @author ccro
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let countMap = {}

  for (let i = 0, len = s.length; i < len; i++) {
    let char = s.charAt(i)
    if (typeof(countMap[char]) === 'undefined')  countMap[char] = 1
    else countMap[char] += 1
  }

  let rs = 0;
  let odd_selected = false;
  Object.keys(countMap).forEach(key => {
    let count = countMap[key]    
    if (count%2==0) rs += countMap[key]
    if (count%2==1) {
      rs += countMap[key] - 1;  // add the even part; a: 3 -> add: 3-1
      if (!odd_selected) {
        rs += 1;
        odd_selected = true // max to select odd once
      }
    }
  })
  return rs
};


/**************************/
let testCases = [
  {
    input: "abccccdd",
    output: 7,
  },
]

let testFuns = {
  longestPalindrome,
}

require('../TestFrame')(testCases, testFuns)