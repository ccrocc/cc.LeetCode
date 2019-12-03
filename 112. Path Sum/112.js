/**
 * @summary 112. Path Sum
 * @description https://leetcode.com/problems/path-sum/
 * @author ccro
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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false

  let sums = [] // store the sum of each path
  let trace = (node, temp_sum) => {
    // end of trace
    (node.left == null && node.right == null)
      && sums.push(temp_sum)
    node.left 
      && trace(node.left, temp_sum + node.left.val);
    node.right 
      && trace(node.right, temp_sum + node.right.val);
  }

  trace(root, root.val)

  if (sums.indexOf(sum) > -1) return true

  return false
};