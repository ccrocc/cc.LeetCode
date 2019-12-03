/**
 * @summary 113. Path Sum II
 * @description https://leetcode.com/problems/path-sum-ii/
 * @author ccro
 * /
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []
  let add = (a, b) => (a + b)
  let rs = [] // store the sum of each path
  let trace = (node, path) => {
    path = [...path]
    // end of trace
    if (node.left == null && node.right == null) {
      if (path.reduce(add) == sum) rs.push(path)
    }
    if (node.left) {
      path.push(node.left.val)
      trace(node.left, path);
      path.pop()    // don't miss this, go to last node
    }
    if (node.right) {
      path.push(node.right.val)
      trace(node.right, path);
      path.pop()
    }
  }

  // O(V+E); vertex + edge
  trace(root, [root.val])
  return rs 
};