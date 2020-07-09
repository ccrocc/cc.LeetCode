/**
 * @summary 141. Linked List Cycle
 * @description https://leetcode.com/problems/linked-list-cycle/
 * @author ccro
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || head.next == null) return false
  let nodeFast = head, nodeSlow = head
  while(nodeSlow && nodeFast && nodeFast.next) {
    nodeSlow = nodeSlow.next
    nodeFast = nodeFast.next.next
    if (nodeFast == nodeSlow) return true
  }
  return false
};

/**************************/
const { deserialize, serialize } = require('../ListBuilder');

let testCases = [
  {
    input: [[1,2], 0],
    output: true
  },
  {
    input: [[1], -1],
    output: false
  },
  {
    input: [[3,2,0,-4], 1],
    output: false
  },
]

let testFuns = {
  hasCycle  // plz run in leetcode.com
}


require('../TestFrame')(testCases, testFuns)