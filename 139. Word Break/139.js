/**
 * @summary 139. Word Break
 * @description https://leetcode.com/problems/word-break/
 * @author ccro
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let wordBreakAnsMap = {}

  let isWordBreak = (s) => {
    if (s == '') return true
    if (s in wordBreakAnsMap) {
      return wordBreakAnsMap[s]
    }
    for (let i = 0, l = s.length; i < l; i++) {
      let l_str = s.substring(0, i)
      let r_str = s.substring(i, l)
      if (wordDict.includes(r_str) && isWordBreak(l_str)) {
        return wordBreakAnsMap[s] = true
      }
    }
    return wordBreakAnsMap[s] = false
  }

  return isWordBreak(s)
};


/**************************/
let testCases = [
  {
    input: [
      "leetcode",
      ["leet", "code"]
    ],
    output: true,
  },
  {
    input: [
      "applepenapple",
      ["apple", "pen"]
    ],
    output: true,
  },
  {
    input: [
      "catsandog",
      ["cats", "dog", "sand", "and", "cat"]
    ],
    output: false,
  },
]

let testFuns = {
  wordBreak,
}

require('../TestFrame')(testCases, testFuns)