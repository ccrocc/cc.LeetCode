/**
 * @summary 125. Valid Palindrome
 * @description https://leetcode.com/problems/valid-palindrome/
 * @author ccro
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let [l, r] = [0, s.length - 1]
  while (l <= r) {
    let [char_l, char_r] = [s.charAt(l).toLowerCase(), s.charAt(r).toLowerCase()]
    console.log('==1==', l, r, char_l, char_r);

    if (!/^[a-z0-9]*$/.test(char_l)) {
      l++
      continue
    }
    if (!/^[a-z0-9]*$/.test(char_r)) {
      r--
      continue
    }
    console.log('==2==', l, r);
    
    if (char_l != char_r) {
      return false
    }
    l++
    r--
  }
  return true
};


/**************************/
let testCases = [
  {
    input: 'A man, a plan, a canal: Panama',
    output: true,
  },
  {
    input: 'race a car',
    output: false,
  },
  {
    input: "0P",
    output: false,
  },
]

let testFuns = {
  isPalindrome,
}

require('../TestFrame')(testCases, testFuns)