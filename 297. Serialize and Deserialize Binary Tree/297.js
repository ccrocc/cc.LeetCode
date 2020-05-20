/**
 * @summary 297. Serialize and Deserialize Binary Tree
 * @description https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let data = []
  let nodes = [root]

  while (nodes.length > 0) {
    let node = nodes.shift()
    data.push(node ? node.val : null)
    if (node !== null) {
      nodes.push(node.left, node.right)
    }
  }

  if (data.length > 0) { // clear `null`s in the last
    while (data.slice(-1)[0] === null) {
      data.pop()
    }
  }
  return data
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data.length == 0) return null
  let nodes = data.map(c => c == null ? null : new TreeNode(parseInt(c, 10)))

  let root = nodes.shift()
  let queue = [root]

  while (nodes.length > 0) {
    let node = queue.shift()
    if (node == null) continue
    node.left = nodes.length > 0 ? nodes.shift() : null
    node.right = nodes.length > 0 ? nodes.shift() : null
    queue.push(node.left, node.right);
  }
  
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */