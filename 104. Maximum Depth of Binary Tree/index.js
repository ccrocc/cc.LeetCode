/**
 * @summary 104. Maximum Depth of Binary Tree
 * @description https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @author ccro
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DP; max = 1 + max(leftMax, rightMax)
var maxDepth = function(root) {
  if (!root) return 0
  let leftMax = maxDepth(root.left)
  let rightMax = maxDepth(root.right)
  return 1 + Math.max(leftMax, rightMax)
}


var maxDepthFullDFS = function(root) { //space: O(kn); time: O(n)
  if(!root) return 0
  let longPath = []
  let dfs = function(node, path) {
    path.push(node.val)
    if (!node.left && !node.right) {
      if (path.length > longPath.length)  {
        longPath = path
      }
    }
    if (node.left)  dfs(node.left, [...path])
    if (node.right) dfs(node.right, [...path])
  }
  dfs(root, [])
  return longPath.length 
};



/**************************/
const { deserialize } = require('../TreeBuilder');

let testCases = [
  {
    input: deserialize([3,9,20,null,null,15,7]),
    output: 3,
  }
]

let testFuns = {
  maxDepthFullDFS,
}

require('../TestFrame')(testCases, testFuns)

