/**
 * @summary 412. Fizz Buzz
 * @description https://leetcode.com/problems/fizz-buzz/
 * @author ccro
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [], i = 1
  while (i <= n) {
    if (i%3 == 0 && i%5 == 0) result.push('FizzBuzz')
    else if (i%3 == 0) result.push('Fizz')
    else if (i%5 == 0)  result.push('Buzz')
    else result.push(`${i}`) 
    i++
  }
  return result  
};


/**************************/
let testCases = [
  {
    input: 15,
    output: [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]
  }
]

let testFuns = {
  fizzBuzz
}

require('../TestFrame')(testCases, testFuns)