/**
 * @summary 13. Roman to Integer
 * @description https://leetcode.com/problems/roman-to-integer/
 * @author ccro
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman_map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let num = 0, len = s.length
  for (let i = 0; i < len; i++) {
    if (['C', 'X', 'I'].includes(s[i]) && i+1 < len) {
      let two_char = s[i] + s[i+1]
      if (roman_map[two_char]) {
        num += roman_map[two_char]
        i++
        continue
      }
    }
    num += roman_map[s[i]]
  }
  return num
};

/**************************/
let testCases = [
  {
    input: 'III',
    output: 3,
  },
  {
    input: 'IV',
    output: 4,
  },
  {
    input: 'IX',
    output: 9,
  },
  {
    input: 'LVIII',
    output: 58,
  },
  {
    input: 'MCMXCIV',
    output: 1994,
  },
  {
    input: 'I',
    output: 1,
  },
  {
    input: 'X',
    output: 10,
  },
]

let testFuns = {
  romanToInt
}

require('../TestFrame')(testCases, testFuns)