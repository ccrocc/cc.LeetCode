/**
 * This is a Linked List Builder with serialize and deserialize 
  1->2->3->4->5->NULL  <=>  [1,2,3,4,5]
 */

/**
How to use:
```
const {serialize, deserialize} = require('../ListBuilder')
console.log(deserialize([1,2,3,4,5]))   // -> result is the head
console.log(serialize(deserialize([1,2,3,4,5])))
```
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * Encodes a list to a array.
 *
 * @param {ListNode} head
 * @return {array}
 */
exports.serialize = function (head) {
  let trace = []

  let node = head

  while (node) {
    trace.push(node.val)
    node = node.next
  }

  return trace
};

/**
 * Decodes your encoded array data to linked list.
 *
 * @param {array} data
 * @return {ListNode}
 */
exports.deserialize = function(data) {
  if (data.length == 0) return null

  let trace = function(node, list) {
    if (list.length == 0) return
    node.next = new ListNode(list.shift())
    trace(node.next, list)
  }

  let list = [...data]  // get a data copy; avoid affect origin data
  let head_node = new ListNode(list.shift())
  trace(head_node, list) 

  return head_node
};

