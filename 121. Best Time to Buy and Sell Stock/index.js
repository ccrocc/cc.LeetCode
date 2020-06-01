/**
 * @summary 121. Best Time to Buy and Sell Stock
 * @description https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @author ccro
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { // time: O(n)
  let min = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min)  {
      min = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min)
    } 
  }
  return maxProfit
};


/**************************/
let testCases = [
  {
    input: [3,2,6,5,0,3],
    output: 4
  },
  {
    input: [7,1,5,3,6,4],
    output: 5
  },
  {
    input: [7,6,4,3,1],
    output: 0
  },
  {
    input: [1,4,2],
    output: 3
  },
  {
    input: [],
    output: 0
  }
]

let testFuns = {
  maxProfit
}

require('../TestFrame')(testCases, testFuns)