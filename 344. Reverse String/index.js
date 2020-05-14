/**
 * @summary 344. Reverse String
 * @description https://leetcode.com/problems/reverse-string/
 * @author ccro
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) { //space: O(1)
  // if (s.length < 2) return s
  let [left, right] = [0, s.length - 1]
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s
};


/**************************/
let testCases = [
  {
    input: ["h","e","l","l","o"],
    output: ["o","l","l","e","h"]
  },
  {
    input: ["H","a","n","n","a","h"],
    output: ["h","a","n","n","a","H"]
  },
  {
    input: ["a"],
    output: ["a"]
  },
  {
    input: [],
    output: []
  }
]

let testFuns = {
  reverseString
}

require('../TestFrame')(testCases, testFuns)