/**
 * @summary 70. Climbing Stairs
 * @description https://leetcode.com/problems/climbing-stairs/
 * @author ccro
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) { // Recursion with mem
  let rsMap = {}
  let climbStairsRecursion = (n) => {
    if (n <= 2) return n
    if (rsMap.hasOwnProperty(n)) return rsMap[n]
    rsMap[n] = climbStairsRecursion(n-1) + climbStairsRecursion(n-2)
    return rsMap[n]
  }
  return climbStairsRecursion(n)
}

var climbStairs_DP = function(n) {
  if (n <= 0) return 1

  // DP[n] = DP[n-1] + DP[n-2];

  // DP[0] = 0
  // DP[1] = 1
  // DP[2] = 2; //1,1 or 2
  //        1=3-2  | 2=3-1
  //        1,2    | 1,1,1 or 2,1 
  // DP[3] = DP[1] + DP[2]  => 1+2
  let dp = []
  dp[1] = 1; //1
  dp[2] = 2; //1,1 or 2 => 2
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
};


/**************************/
let testCases = [
  {
    input: 2,
    output: 2,
  },
  {
    input: 3,
    output: 3,
  },
]


let testFuns = {
  climbStairs,
  climbStairs_DP
}

require('../TestFrame')(testCases, testFuns)