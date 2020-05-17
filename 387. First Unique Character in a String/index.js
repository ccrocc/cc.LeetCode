/**
 * @summary 387. First Unique Character in a String
 * @description https://leetcode.com/problems/first-unique-character-in-a-string/
 * @author ccro
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) { // space: O(m); time: O(n), worse - O(2n)
  let map = {}
  s.split('').forEach(char => {
    map[char] = (map[char] || 0) + 1
  })
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && map[s[i]] == 1) return i
  }
  return -1
};


/**************************/
let testCases = [
  {
    input: "leetcode",
    output: 0
  },
  {
    input: "loveleetcode",
    output: 2
  }
]

let testFuns = {
  firstUniqChar,
}

require('../TestFrame')(testCases, testFuns)