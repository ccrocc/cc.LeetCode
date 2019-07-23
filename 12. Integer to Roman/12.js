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
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman_BF = function (num) {
  if (num > 4000 || num < 1) return null
  let roman = ''
  // 10^3
  while (num >= 1000) {
    roman += 'M'
    num = num - 1000
  }
  // 10^2
  if (num >= 900) {
    roman += 'CM'
    num = num - 900
  } else if (num >= 500) {
    roman += 'D'
    num = num - 500
    while (num >= 100) {
      roman += 'C'
      num = num - 100
    }
  } else if (num >= 400) {
    roman += 'CD'
    num = num - 400
  } else if (num >= 100) {
    while (num >= 100) {
      roman += 'C'
      num = num - 100
    }
  }
  // 10^1
  if (num >= 90) {
    roman += 'XC'
    num = num - 90
  } else if (num >= 50) {
    roman += 'L'
    num = num - 50
    while (num >= 10) {
      roman += 'X'
      num = num - 10
    }
  } else if (num >= 40) {
    roman += 'XL'
    num = num - 40
  } else if (num >= 10) {
    while (num >= 10) {
      roman += 'X'
      num = num - 10
    }
  }
  // 10^0
  if (num >= 9) {
    roman += 'IX'
    num = num - 9
  } else if (num >= 5) {
    roman += 'V'
    num = num - 5
    while (num >= 1) {
      roman += 'I'
      num = num - 1
    }
  } else if (num >= 4) {
    roman += 'IV'
    num = num - 4
  } else if (num >= 1) {
    while (num >= 1) {
      roman += 'I'
      num = num - 1
    }
  }
  return roman
};


var intToRoman_1 = function (num) {
  var roman_map = {
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
  var roman = ''
  Object.keys(roman_map).forEach((key) => {
    var val = roman_map[key]
    if (num >= val) {
      while (num >= val) {
        roman += key
        num = num - val
      }      
    }
  })
  return roman
};

var intToRoman_2 = function (num) {
  var num_map = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman_map = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var roman = ''
  num_map.forEach((val, i) => {
    if (num >= val) {
      while (num >= val) {
        roman += roman_map[i]
        num = num - val
      }
    }
  })
  return roman
};

/**************************/
let testCases = [
  {
    input: 3,
    output: 'III'
  },
  {
    input: 4,
    output: 'IV'
  },
  {
    input: 9,
    output: 'IX'
  },
  {
    input: 58,
    output: 'LVIII'
  },
  {
    input: 1994,
    output: 'MCMXCIV'
  },
  {
    input: 1,
    output: 'I'
  },
  {
    input: 10,
    output: 'X'
  },
]

let testFuns = {
  intToRoman_BF,
  intToRoman_1,
  intToRoman_2
}

require('../TestFrame')(testCases, testFuns)