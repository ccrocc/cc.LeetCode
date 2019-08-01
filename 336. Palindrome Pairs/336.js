/**
 * @summary 336. Palindrome Pairs
 * @description https://leetcode.com/problems/palindrome-pairs/
 * @author ccro
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs_BF = function (words) {

  let isPalindrome = (str) => {
    let len = str.length
    let [i, j] = (len % 2 == 0) ? [len / 2 - 1 , len / 2] : [Math.floor(len / 2) - 1, Math.ceil(len / 2)]
    while (i >= 0) {
      if (str.charAt(i) !== str.charAt(j)) return false
      i--
      j++
    }
    return true
  }

  let rs = []
  let w_len = words.length
  for (let i = 0; i < w_len - 1; i++) {
    for (let j = i + 1; j < w_len; j++) {
      let str1 = words[i] + words[j]
      let str2 = words[j] + words[i]
      if (isPalindrome(str1)) rs.push([i, j])
      if (isPalindrome(str2)) rs.push([j, i])
    }    
  }

  return rs
};

/**
 * use a hash map
 * @param {*} words 
 */
var palindromePairs = function (words) {
  let rs = {}
  // build a word hash map
  // let words_map = {}
  // let index = 0
  // for (const word of words) words_map[word] = index++
  let words_map = words.reduce((acc, cur, i) => { acc[cur] = i; return acc; }, {});

  var isPalindrome = (str) => {
    let [i, j] = [0, str.length - 1]
    while (i < j) {
      if (str.charAt(i++) !== str.charAt(j--)) return false
    }
    return true
  }

  var strReverse = (str) => {
    let ss = ''
    for (const s of str) {
      ss = s + ss
    }
    return ss
  }

  for (const word of words) {
    let len = word.length
    for (let i = 0; i <= len; i++) {
      // test right string
      let left_str = word.slice(0, i)
      let right_str = word.slice(i)
      left_str = strReverse(left_str)

      if (isPalindrome(right_str) && words_map[`${left_str}`] !== undefined) {
        let [m, n] = [words_map[`${word}`], words_map[`${left_str}`]]
        if (m !== n) rs[`${m}|${n}`] = [m, n]
      }

      // if left string is palindrome, check rest right string can be fount in words_map
      left_str = word.slice(0, len - i)
      right_str = word.slice(len - i)
      right_str = strReverse(right_str)

      if (isPalindrome(left_str) && words_map[`${right_str}`] !== undefined) {
        let [m, n] = [words_map[`${right_str}`], words_map[`${word}`]]
        if (m !== n) rs[`${m}|${n}`] = [m, n]
      }
    }
  }

  return Object.values(rs) 
}
/**************************/
let testCases = [
  {
    input: ["abcd", "dcba", "lls", "s", "sssll"],
    output: [[0, 1], [1, 0], [3, 2], [2, 4]],
  },
  {
    input: ["bat", "tab", "cat"],
    output: [[0, 1], [1, 0]],
  },
  {
    input: ["a", ""],
    output: [[0, 1], [1, 0]],
  },
]

let testFuns = {
  palindromePairs_BF,
  palindromePairs
}

require('../TestFrame')(testCases, testFuns)