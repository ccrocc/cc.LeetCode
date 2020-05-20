/**
 * @summary 108. Convert Sorted Array to Binary Search Tree
 * @description https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * @author ccro
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length < 1) return null
  let mid = nums.length>>1
  let left = sortedArrayToBST(nums.slice(0, mid))
  let right = sortedArrayToBST(nums.slice(mid+1))  
  return new TreeNode(nums[mid], left, right)
};


/**************************/
const { deserialize, serialize, TreeNode } = require('../TreeBuilder');

let testCases = [
  {
    input: [-10,-3,0,5,9],
    output: [0,-3,9,-10,null,5]
  },
]

let testFuns = {
  sortedArrayToBST: (nums) => {
    // for this special test case, we need to parse the output first
    // guaranteed `mocha` assertions can be used
    let result = sortedArrayToBST(nums)
    let output = serialize(result)
    return output
  }
}

require('../TestFrame')(testCases, testFuns)