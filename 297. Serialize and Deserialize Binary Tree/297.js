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
  let trace = []
  
  let serialize_trace = (node, trace) => {

    (node && node.left) ? trace.push(node.left.val) : trace.push(null);
    (node && node.right) ? trace.push(node.right.val) : trace.push(null);

    node && node.left && serialize_trace(node.left, trace)
    node && node.right && serialize_trace(node.right, trace)

    // it will stop in node is null
  }

  root && trace.push(root.val)
  serialize_trace(root, trace)
    
  while (trace.slice(-1)[0] === null) {
      trace.pop()
  }

  return trace
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length == 0)  return null

  let head_node = new TreeNode(data.shift())
  // each time get two data
  let trace_data = (node, data) => {
    if (data.length == 0)  return
    node.left = node.right = null
    // build left node
    if (data.length > 0) {
      let left_data = data.shift()
      if (left_data !== null) {
        node.left = new TreeNode(left_data)
      }
    }

    // build right node
    if (data.length > 0) {
      let right_data = data.shift()
      if (right_data !== null) {
        node.right = new TreeNode(right_data)
      }
    }
    
    node.left && trace_data(node.left, data)
    node.right && trace_data(node.right, data)
  }

  trace_data(head_node, data)

  return head_node
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */