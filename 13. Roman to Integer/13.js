/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/


/**
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