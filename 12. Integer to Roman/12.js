/**
 * @summary 12. Integer to Roman
 * @description https://leetcode.com/problems/integer-to-roman/
 * @author ccro
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

/* 2nd time */
var intToRoman_2nd = function (num) {
  const RomanMap = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]);

  let rs = '';
  RomanMap.forEach((n, roman) => {
    // console.log('roman, n => ', roman, n);
    while (num >= n) {
      rs += roman
      num -= n
    }
  });
  return rs
}



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
  intToRoman_2,
  intToRoman_2nd
}

require('../TestFrame')(testCases, testFuns)