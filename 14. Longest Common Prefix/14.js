/**
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let strs_len = strs.length || 0
  if (!strs || strs_len < 1) return ""
  if (strs_len == 1) return strs[0]  
  let str = strs[0]
  let com_pre = ''
  let inner_loop_brk = false
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    for (let j = 1; j < strs_len; j++) {
      if (strs[j].charAt(i) !== char) {
        inner_loop_brk = true
        break
      }
      if (j == strs_len - 1) com_pre += char
    }
    if (inner_loop_brk) break
  }
  return com_pre
};

var longestCommonPrefix_1 = function (strs) {
  if (!strs || !strs.length) { return ''; }
  if (strs.length == 1) { return strs.find(() => true); }

  strs.sort(function (a, b) { return b.length - a.length });

  var longestString = strs[0];

  var lastPrefix = null;
  for (let currStr of strs) {
    var prefix = '';
    for (let i = 0; i < longestString.length; i++) {
      if (currStr[i] == longestString[i]) { prefix += (longestString[i]); }
      else if (i == 0) { break; }
    }
    if (prefix == '') { return ''; }
    if (!lastPrefix) { lastPrefix = prefix; }
    if (prefix.length < lastPrefix.length) { lastPrefix = prefix; }
  }
  if (lastPrefix == null) { lastPrefix = longestString; }
  return lastPrefix;
};

/**************************/
let testCases = [
  {
    input: ["flower", "flow", "flight"],
    output: "fl",
  },
  {
    input: ["dog", "racecar", "car"],
    output: "",
  },
  {
    input: [],
    output: "",
  },
  {
    input: ["a"],
    output: "a",
  },
  {
    input: ["aca", "cba"],
    output: "",
  },
  {
    input: ["a", "a", "b"],
    output: "",
  },
]

let testFuns = {
  longestCommonPrefix,  // O(S)
  longestCommonPrefix_1,
}

require('../TestFrame')(testCases, testFuns)