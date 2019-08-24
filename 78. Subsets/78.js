/**
 * @summary 78. Subsets
 * @description https://leetcode.com/problems/subsets/
 * @author ccro
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let rs = []
  // C(m, n)
  let dfs = (n, s, cur) => {
    if (cur.length == n)  {
      // take care of cur as reference
      rs.push([...cur]) 
      return
    }
    for (let i = s; i < nums.length; i++) {
      cur.push(nums[i])
      dfs(n, i + 1, cur)
      cur.pop()
    }
  };

  var cur = []
  for (let i = 0; i <= nums.length; i++) {
    dfs(i, 0, cur)
  }

  return rs
};



/**************************/
let testCases = [
  {
    input: [1, 2, 3],
    output: [
      [3],
      [1],
      [2],
      [1, 2, 3],
      [1, 3],
      [2, 3],
      [1, 2],
      []
    ],
  },
  {
    input: [1, 2, 3, 4],
    output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]],
  },
]

testCases.forEach(e => {
  e.output.forEach(e => e.sort())
  e.output.sort()
  return e
});

let testFuns = {
  subsets: (nums) => {
    let rs = subsets(nums)
    rs.forEach(e => e.sort());
    return rs.sort()
  },
}

require('../TestFrame')(testCases, testFuns)