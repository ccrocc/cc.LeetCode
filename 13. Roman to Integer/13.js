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
  let num = 0, i = 0
  let l = s.length
  while (i < l) {
    var str = ''
    if (i + 1 < l) {
      // test 2 char first
      str = s.charAt(i) + s.charAt(i + 1)
    }
    if (roman_map[str]) {
      i = i + 2
    } else {
      str = s.charAt(i)
      i++
    }
    num += roman_map[str] || 0
  }
  return num
};

var romanToInt_1 = function (s) {
  let roman_map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let num = 0
  let last_char_val = 0 
  for (let i = s.length; i >= 0 ; i--) {
    let char = s.charAt(i)
    let char_val = roman_map[char] || 0
    if (char_val < last_char_val) num -= char_val
    else num += char_val
    last_char_val = char_val
  }
  return num
};

var romanToInt_2nd = function (s) {
  const RomanMap = {
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

  let sum = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    let char = s.charAt(i)
    if (['C', 'X', 'I'].indexOf(char) > -1 && i + 1 < len) {
      let new_char = s.charAt(i) + s.charAt(i+1)
      if (RomanMap[new_char]) {
        sum += RomanMap[new_char]
        i++
        continue
      }
    }
    sum += RomanMap[char]
  }

  return sum
}

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
  romanToInt,
  romanToInt_1,
  romanToInt_2nd
}

require('../TestFrame')(testCases, testFuns)