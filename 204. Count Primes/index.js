/**
 * @summary 204. Count Primes
 * @description https://leetcode.com/problems/count-primes/
 * @author ccro
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrime = num => {
    if (num < 10 && [2,3,5,7].includes(num))  return true
    if (num < 10 && ![2,3,5,7].includes(num))  return false
    if ([0, 2, 4, 6, 8].includes(num%10)) return false
    let n = Math.sqrt(num)  // #hint 4
    for (let i = 2; i <= n; i++) { // except 1
      if (num%i == 0) return false
    }
    return true
  }

  let count = 0
  while(--n > 0) {
    if(isPrime(n)) count++
  }
  return count
};

var countPrimes_old = function(n) { // Time Limit Exceeded will n is bigger
  const isPrime = num => {
    if (num < 10 && [2,3,5,7].includes(num))  return true
    if (num < 10 && ![2,3,5,7].includes(num))  return false
    if ([0, 2, 4, 6, 8].includes(num%10)) return false
    let n = num >> 1 // Math.floor(num/2)
    while(n>1) {  // except 1
      if (num%n === 0) return false
      n--
    }
    return true
  }

  let count = 0
  while(--n > 0) {
    if(isPrime(n)) count++
  }
  return count
};

/**************************/
let testCases = [
  {
    input: 10,
    output: 4
  },
  {
    input: 20,
    output: 8
  },
  {
    input: 50,
    output: 15
  },
  {
    input: 2,
    output: 0
  },
  {
    input: 499979,
    output: 41537
  }
]

let testFuns = {
  countPrimes,
  countPrimes_old,
}


require('../TestFrame')(testCases, testFuns)