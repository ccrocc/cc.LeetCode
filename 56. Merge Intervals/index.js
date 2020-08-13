/**
 * @summary 56. Merge Intervals
 * @description https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) { // space: O(1)-O(n), time:O(nlogn),sorting
  intervals = intervals.sort((blockA, blockB) => {  // O(nlogn)
    return blockA[0] - blockB[0]
  })

  let result = []
  let i = 0, block = intervals[0]
  while (i < intervals.length - 1) {
    let blockNext = intervals[i+1]
    if (blockNext[0] >= block[0] && blockNext[0] <= block[1]) {
      block[1] = Math.max(block[1], blockNext[1])
    } else {
      result.push(block)
      block = blockNext
    }
    i++
  }
  block && result.push(block)
  return result
};

/**************************/
let testCases = [
  {
    input: [[1,3],[2,6],[8,10],[15,18]],
    output: [[1,6],[8,10],[15,18]]
  },
  {
    input: [[1,4],[4,5]],
    output: [[1,5]]
  },
  {
    input: [[1,4]],
    output: [[1,4]]
  },
  {
    input: [],
    output: []
  },
  {
    input: [[1,9],[2,5],[19,20],[10,11],[12,20],[0,3],[0,1],[0,2]],
    output: [[0,9],[10,11],[12,20]]
  }
]


let testFuns = {
  merge,
}

require('../TestFrame')(testCases, testFuns)