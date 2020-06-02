/**
 * @summary 21. Merge Two Sorted Lists
 * @description https://leetcode.com/problems/merge-two-sorted-lists/
 * @author ccro
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {  // time: O(n)
  if (l1 == null) return l2
  if (l2 == null) return l1

  let checkNode = l1.val <= l2.val ? l1 : l2
  let insertNode = l1.val <= l2.val ? l2 : l1

  while (checkNode.next) {
    if (insertNode && insertNode.val >= checkNode.val && insertNode.val < checkNode.next.val) {  // do insert
      [checkNode.next, insertNode.next, checkNode, insertNode] = [insertNode, checkNode.next, insertNode, insertNode.next]
    } else {
      checkNode = checkNode.next
    }
  }
  if (insertNode !== null) {
    checkNode.next = insertNode
  }
  return l1.val <= l2.val ? l1 : l2
};
/**
  check   check.next 
l1 []   -> []    ->    []  ->  []
l2   []   ->  []
    insert
  if insert node val between, check.next to be insert and insert.next to be check.next
 * /

/**************************/
const { deserialize, serialize } = require('../ListBuilder');

let testCases = [
  {
    input: [[1,2,4], [1,3,4]],
    output: [1, 1, 2, 3, 4, 4]
  },
  {
    input: [[-10,-10,-9,-4,1,6,6], [-7]],
    output: [-10,-10,-9,-7,-4,1,6,6]
  }
]

let testFuns = {
  mergeTwoLists: (l1, l2) => {
    // for this special test case, we need to parse input and output first
    // guaranteed `mocha` assertions can be used
    let input1 = deserialize(l1)
    let input2 = deserialize(l2)
    let result = mergeTwoLists(input1, input2)
    let output = serialize(result)
    console.log(output)
    return output
  }
}


require('../TestFrame')(testCases, testFuns)