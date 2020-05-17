/**
 * @summary 122. Best Time to Buy and Sell Stock II
 * @description https://leetcode.com/problems/fizz-buzz/
 * @author ccro
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {  // space: O(1); time: O(n)
  if (!prices || prices.length < 1) return 0

  let [low, high] = [prices[0], null]
  let max = 0

  prices.push(0)  // make sure, the last one can be judged
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {  // current is max than pre, update high
      high = prices[i]
    } else { // prices[i] <= prices[i-1]; don't update high, and calc the max
      if (high !== null)  {
        max += high - low
      }
      [low, high] = [prices[i], null]
    }
  }
  return max
};


/**************************/
let testCases = [
  {
    input: [7,1,5,3,6,4],
    output: 7
  },
  {
    input: [1,2,3,4,5],
    output: 4
  },
  {
    input: [7,6,4,3,1],
    output: 0
  }
]

let testFuns = {
  maxProfit
}

require('../TestFrame')(testCases, testFuns)