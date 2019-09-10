/**
 * @summary 100. Same Tree
 * @description https://leetcode.com/problems/same-tree/
 * @author ccro
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// works on leetcode
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// use recursive
var isSameTree_local = function (p, q) {
  let node_p = null, node_q = null
  if (p) {
    node_p = new TreeNode(p[0] || p)
    node_p.left = p[1] || null
    node_p.right = p[2] || null
  }
  if (q) {
    node_q = new TreeNode(q[0] || q)
    node_q.left = q[1] || null
    node_q.right = q[2] || null
  }

  if (node_p === null && node_q  === null)  {
    return true
  } else if ((node_p === null && node_q !== null) || (node_p !== null && node_q === null)) {
    return false
  } else {  // node_p and node_q both not null
    if (node_p.val !== node_q.val) {
      return false
    } else {
      return isSameTree_local(node_p.left, node_q.left) && isSameTree_local(node_p.right, node_q.right)
    }
  }
};

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**************************/
let testCases = [
  {
    input: [
      [1, 2, 3],
      [1, 2, 3]
    ],
    output: true,
  },
  {
    input: [
      [1, 2],
      [1, null, 3]
    ],
    output: false,
  },
  {
    input: [
      [1, 2, 1],
      [1, 1, 2]
    ],
    output: false,
  },
]


let testFuns = {
  isSameTree_local
}

require('../TestFrame')(testCases, testFuns)