/**
 * @summary 57. Insert Interval
 * @description https://leetcode.com/problems/insert-interval/
 * @author ccro
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let rs = []
  for (const interval of intervals) {
    if (interval[0] > newInterval[1] || interval[1] < newInterval[0]) {
      rs.push(interval)
    } else if (newInterval[0] <= interval[0] && newInterval[1] >= interval[1]) {
      continue
    } else {
      newInterval[0] = (interval[0] <= newInterval[0]) ? interval[0] : newInterval[0]
      newInterval[1] = (interval[1] >= newInterval[1]) ? interval[1] : newInterval[1]
    }
  }
  rs.push(newInterval)
  return rs.sort((a, b) => (a[0] - b[0]))
};


var insert_s0 = function (intervals, newInterval) {
  let rs = []
  for (const interval of intervals) {
    if (interval[0] > newInterval[1] || interval[1] < newInterval[0]) {
      rs.push(interval)
    } else if (newInterval[0] <= interval[0] && newInterval[1] >= interval[1]) {
      continue
    } else if (newInterval[0] >= interval[0] && newInterval[1] <= interval[1]) {
      newInterval[0] = interval[0]
      newInterval[1] = interval[1]
    } else if (newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) {
      newInterval[0] = interval[0]
    } else if (newInterval[1] >= interval[0] && newInterval[1] <= interval[1]) {
      newInterval[1] = interval[1]
    }
  }
  rs.push(newInterval)
  return rs.sort((a, b) => (a[0] - b[0]))
};

/**************************/
let testCases = [
  {
    input: [
      [[1, 3], [6, 9]],
      [2, 5]
    ],
    output: [[1, 5], [6, 9]]
  },
  {
    input: [
      [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
      [4, 8]
    ],
    output: [[1, 2], [3, 10], [12, 16]]
  },
  {
    input: [
      [[1, 5]],
      [2, 3]
    ],
    output: [[1, 5]]
  },
]

let testFuns = {
  insert,
  insert_s0,
}

require('../TestFrame')(testCases, testFuns)

parseInt