/**
 * @summary 242. Valid Anagram
 * @description https://leetcode.com/problems/valid-anagram/
 * @author ccro
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {  // time: 2*O(nlogn)
  let strSort = function(str) {
    return str.split('').sort().join('')
  }
  return strSort(s) == strSort(t)
};

var isAnagramHashTable = function(s, t) {  // space: O(1) - just 26 chars ; time: O(n)
  // return a12b2c3...z10
  let getSerializeCount = function(str) {
    let map = {}
    str.split('').forEach(char => {
      map[char] = (map[char] || 0) + 1
    });
    let rs = ''
    for (const char of Object.keys(map).sort()) {
      rs += `${char}${map[char]}`
    }
    return rs
  }
  return getSerializeCount(s) == getSerializeCount(t)
};

/**************************/
let testCases = [
  {
    input: ["anagram","nagaram"],
    output: true
  },
  {
    input: ["rat", "car"],
    output: false
  }
]

let testFuns = {
  isAnagram,
  isAnagramHashTable
}

require('../TestFrame')(testCases, testFuns)