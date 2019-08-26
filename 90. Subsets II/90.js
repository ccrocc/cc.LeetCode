/**
 * @summary 90. Subsets II
 * @description https://leetcode.com/problems/subsets-ii/
 * @author ccro
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let rs = {}
  // C(m, n)
  let dfs = (n, s, cur) => {
    if (cur.length == n) {
      // take care of cur as reference
      let arr = [...cur].sort()
      rs[arr.join('|')] = arr
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

  return Object.values(rs)
};


/**************************/
let testCases = [
  {
    input: [1, 2, 2],
    output: [
      [2],
      [1],
      [1, 2, 2],
      [2, 2],
      [1, 2],
      []
    ],
  },
]

testCases.forEach(e => {
  e.output.forEach(e => e.sort())
  e.output.sort()
  return e
});

let testFuns = {
  subsetsWithDup: (nums) => {
    let rs = subsetsWithDup(nums)
    rs.forEach(e => e.sort());
    return rs.sort()
  },
}

require('../TestFrame')(testCases, testFuns)