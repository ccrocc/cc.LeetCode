/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"  
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var ans = []
  for (let i = 1, l = s.length; i < l-1; i++) {
    var left = i - 1
    while (condition) {
      
    }
  }  
};


/**
 * test
 */
var s = 'babad' // bab or aba
var s = 'cbbd'  // bb

console.log(longestPalindrome(s));
