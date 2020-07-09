/**
 * @summary 94. Binary Tree Inorder Traversal
 * @description https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let rs = []
  let inorderTrave = node => {
    node && node.left && inorderTrave(node.left)
    node && rs.push(node.val)
    node && node.right && inorderTrave(node.right)
  }
  inorderTrave(root)
  return rs
};

/**************************/
const { deserialize } = require('../TreeBuilder');

let testCases = [

]


let testFuns = {
  inorderTraversal  // test on leetcode.com
}

require('../TestFrame')(testCases, testFuns)