/**
 * @summary 347. Top K Frequent Elements
 * @description https://leetcode.com/problems/top-k-frequent-elements/
 * @author ccro
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let countMap = new Map()
  nums.forEach(num => {
    // if (!countMap.hasOwnProperty(num)) countMap[num] = 1
    // else countMap[num] += 1
    if (!countMap.has(num))  countMap.set(num, 1)
    else countMap.set(num, countMap.get(num)+1)
  })
  // console.log(countMap)
  // console.log(countMap.entries());
  // console.log([...countMap.entries()].sort((a, b)=>(b[1]-a[1])));
  let rs = [];
  [...countMap.entries()]
    .sort((a, b)=>(b[1]-a[1]))
    .slice(0, k)
    .forEach(data => {
      rs.push(data[0])
    });

  return rs;
};


/**************************/
let testCases = [
  {
    input: [
      [1,1,1,2,2,3],
      2
    ],
    output: [1,2],
  },
  {
    input: [
      [1],
      1
    ],
    output: [1],
  },
]

let testFuns = {
  topKFrequent,
}

require('../TestFrame')(testCases, testFuns)