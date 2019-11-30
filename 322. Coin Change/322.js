/**
 * @summary 322. Coin Change
 * @description https://leetcode.com/problems/coin-change/
 * @author ccro
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // DP[amount] = min(DP[amount - eachCoin]) + 1
  let DP = {}; DP[0] = 0;
  for (i = 1; i <= amount; i++) {
    let count = 0;
    DP[i] = amount + 1; // max than amount; let the define count bigger
    coins.forEach(coin => {
      if (i - coin >= 0) {
        DP[i] = Math.min(DP[i], DP[i-coin]+1) // update DP[i] to the right one
      }
    });
    // console.log("i, DP[i], DP => ", i, DP[i], DP);
  }
  return DP[amount] > amount ? -1 : DP[amount]
};


/**************************/
let testCases = [
  {
    input: [
      [1, 2, 5],
      11
    ],
    output: 3,
  },
  {
    input: [
      [2],
      3
    ],
    output: -1,
  },
]

let testFuns = {
  coinChange
}

require('../TestFrame')(testCases, testFuns)