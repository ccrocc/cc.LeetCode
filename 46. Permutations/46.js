/**
 * @summary 46. Permutations
 * @description https://leetcode.com/problems/permutations/
 * @author ccro
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {  // O(n!)
  if (nums.length == 1) {
    return [nums]
  }

  let rs = []
  nums.forEach((num, i) => { // O(n)
    // console.log(num, i);
    // let re_nums = nums.slice(0,i).concat(nums.slice(i+1))
    let re_nums = [...nums] // copy array
    re_nums.splice(i, 1)  // remove i in new array
    permute(re_nums).forEach(ans => { // recursion here; O((n-1)!)
      rs.push([num, ...ans])
      // rs.push([...ans, num])
    })
  });
  return rs
};

// O(2^n*n); space: O(n)
var permute_dfs = function(nums) { 
  let rs = []
  // trace is the result of each step
  let dfs = (nums, trace) => {
    // if nums if empty, trace end, push this tace to the ans/rs
    if (nums.length === 0) {
      rs.push([...trace]) // be care, trace is a reference
      // console.log('rs1 => ', rs);
      return
    }
    // this means: start trace from nums[i]
    nums.forEach((num, i) => {
      trace.push(num)
      let re_nums = [...nums] // copy array
      re_nums.splice(i, 1)  // remove i in new array
      // console.log('trace, re_nums => ', trace, re_nums);
      dfs(re_nums, trace)
      trace.pop() // ??? go back to last point!!!
    })
  }

  dfs(nums, [])

  return rs
};

/**************************/
let testCases = [
  {
    input: [1,2,3],
    output: [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]
  },
  {
    input: [1,2,3,4],
    output: [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]
  },
]

let testFuns = {
  permute,
  permute_dfs
}

require('../TestFrame')(testCases, testFuns)


