/** 
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @summary 589. N-ary Tree Preorder Traversal
 * @description https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * @author ccro
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let rs = [] 
  return recursive(root, rs)
};

var recursive = (node, rs) => {
  if (!node)  return rs
  rs.push(node.val)
  if (node.children) {
    for (const child of node.children) {
      recursive(child, rs)
    }
  }
  return rs
}

/**************************/
var Node = function (val, children) {
  this.val = val;
  this.children = children;
};

/**************************/

// var testNode = new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])

// console.log(JSON.stringify(testNode));


/**************************/
let testCases = [
  {
    input: new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]),
    output: [1, 3, 5, 6, 2, 4],
  },
]

let testFuns = {
  preorder,
}

require('../TestFrame')(testCases, testFuns)