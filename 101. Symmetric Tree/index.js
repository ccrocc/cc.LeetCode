/**
 * @summary 101. Symmetric Tree
 * @description https://leetcode.com/problems/symmetric-tree/
 * @author ccro
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root)  return true
  var isMirror = (nodeLeft, nodeRight) => {
    if (nodeLeft == null && nodeRight == null)  return true
    if (nodeLeft == null || nodeRight == null)  return false

    return nodeLeft.val == nodeRight.val 
          && isMirror(nodeLeft.left, nodeRight.right) 
          && isMirror(nodeLeft.right, nodeRight.left)
  }
  return isMirror(root.left, root.right)
}

var isSymmetricDFS = function (root) { // with in order DFS
  if (!root)  return true
  let dfsInOder = (node) => {
    if (node.left || node.right) {
      return [...dfsInOder(node.left || []), node.val, ...dfsInOder(node.right || [])]
    } else {
      return [node.val]
    }
  }
  let inOrderArr = dfsInOder(root)
  let [i, j] = [0, inOrderArr.length-1]
  while (i < j) {
    if (inOrderArr[i] != inOrderArr[j]) return false
    i++
    j--
  }
  return true
};


/**************************/
const { deserialize } = require('../TreeBuilder');

let testCases = [
  {
    input: deserialize([1, 2, 2, 3, 4, 4, 3]),
    output: true,
  },
  {
    input: deserialize([1, 2, 2, null, 3, null, 3]),
    output: false,
  },
  {
    input: deserialize([5,4,1,null,1,null,4,2,null,2,null]),
    output: false,
  },
]


let testFuns = {
  isSymmetric
}

require('../TestFrame')(testCases, testFuns)