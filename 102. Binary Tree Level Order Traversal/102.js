/**
 * @summary 102. Binary Tree Level Order Traversal
 * @description https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @author ccro
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root)  return []   // take care if root is null
  let rs = []
  let traversal = (node, level) => {
    let temp_arr = rs[level] || []
    temp_arr.push(node.val)
    rs[level] = temp_arr
    level++
    node.left && traversal(node.left, level)
    node.right && traversal(node.right, level)
  }

  traversal(root, 0)
  return rs
};