/**
 * This is a Tree Builder with serialize and deserialize 
 * (see, leetcode 297. Serialize and Deserialize Binary Tree)
 * Tran binary tree [3,9,20,null,null,15,7] to TreeNode object
    3
   / \
  9  20
    /  \
   15   7
 */

/**
How to use:
```
const {serialize, deserialize} = require('../BuildTree')
console.log(deserialize([3,9,20,null,null,15,7]))
console.log(serialize(deserialize([3,9,20,null,null,15,7])))
```
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * Encodes a tree to a array.
 *
 * @param {TreeNode} root
 * @return {array}
 */
function serialize(root, type = 'BFS') {
  if (type == 'BFS') return _serializeBFS(root)
  if (type == 'DFS') return _serializeDFS(root)
  if (type == 'DFS-IN') return _serializeDFS(root, 'IN')
  if (type == 'DFS-PRE') return _serializeDFS(root, 'PRE')
  if (type == 'DFS-POST') return _serializeDFS(root, 'POST')
  return []
}

function _serializeBFS(root) {
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
}

function _serializeBFS_old(root) {
  let trace = []

  let bfs_trace = (node) => {
    trace.push((node && node.left) ? node.left.val : null)
    trace.push((node && node.right) ? node.right.val : null)
    if (node && (node.left || node.right)) {
      bfs_trace(node.left)
      bfs_trace(node.right)
    }
  }

  if (root) {
    trace.push(root.val)
    bfs_trace(root)
    // clear `null`s in the last
    while (trace.slice(-1)[0] === null) {
      trace.pop()
    }
  }

  return trace
}

// pre order only
function _serializeDFS_loop(root) {
  let data = []

  let nodes = [root]
  while (nodes.length > 0) {
    let node = nodes.shift()
    // if node has children(left, right), add to the front, and then get it first
    if (node !== null) {
      nodes.unshift(node.left, node.right)
      data.push(node ? node.val: null)
    }
  }

  if (data.length > 0) { // clear `null`s in the last
    while (data.slice(-1)[0] === null) {
      data.pop()
    }
  }
  return data
}

// default: pre-order; TODO: fix double `null`
function _serializeDFS(root, order = 'PRE') {
  let trace = []

  let dfs_trace = (node) => {
    order == 'PRE' && trace.push(node ? node.val : null)
    node && (node.left || node.right) && dfs_trace(node.left)
    order == 'IN' && trace.push(node ? node.val : null)
    node && (node.left || node.right) && dfs_trace(node.right)
    order == 'POST' && trace.push(node ? node.val : null)
  }

  if (root) {
    dfs_trace(root)
    // clear `null`s in the last
    while (trace.slice(-1)[0] === null) {
      trace.pop()
    }
  }

  return trace
}

/**
 * Decodes your encoded array data to tree.
 *
 * @param {array} data // default in bfs order
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

exports.TreeNode = TreeNode
exports.serialize = serialize
exports.deserialize = deserialize

/*
let root = deserialize([1,2,3,null,null,4,5])
console.log(`
 * tree:
     1
    / \\
   2   3
      / \\
     4   5
`)
console.log('BFS: ', serialize(root, 'BFS'))
console.log('DFS: ', serialize(root, 'DFS'))
console.log('DFS-PRE-ORDER: ', serialize(root, 'DFS-PRE'))
console.log('DFS-IN-ORDER: ', serialize(root, 'DFS-IN'))
console.log('DFS-POST-ORDER: ', serialize(root, 'DFS-POST'))

let root1 = deserialize([0,-3,9,-10,null,5])
console.log([0,-3,9,-10,null,5])
console.log(root1)

console.log(`
 * tree:
     0
    / \\
   -3   9
  /    /
-10   5
`)
console.log('BFS: ', serialize(root1, 'BFS'))
console.log('DFS: ', serialize(root1, 'DFS'))
console.log('DFS-PRE-ORDER: ', serialize(root1, 'DFS-PRE'))
console.log('DFS-IN-ORDER: ', serialize(root1, 'DFS-IN'))
console.log('DFS-POST-ORDER: ', serialize(root1, 'DFS-POST'))
*/
