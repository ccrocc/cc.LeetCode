/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0, last_max = 0
  let map = []

  for (let i = 0; i < s.length; i++) {
    var char = s.charAt(i)
    if (map && map.includes(char)) {
      last_max = Math.max(last_max, max)
      // reset map & new max
      map = map.slice(map.indexOf(char)+1)
      max = map.length
    }
    map.push(char)
    max++
  }
  
  return Math.max(last_max, max)
};

/**
 * test, done
 */
var s = 'dvdf'
var s = 'bbbbb'
var s = 'pwwkew'
var s = 'abcabcbb'
var s = 'aab'

console.log(lengthOfLongestSubstring(s));

/**************************/
var testCases = [
  {
    input: 'dvdf',
    output: 3
  },
  {
    input: 'bbbbb',
    output: 1
  },
  {
    input: 'pwwkew',
    output: 3
  },
  {
    input: 'abcabcbb',
    output: 3
  },
  {
    input: 'aab',
    output: 2
  },
]

require('../TestFrame')(testCases, lengthOfLongestSubstring)