/**
 * @summary 234. Palindrome Linked List
 * @description https://leetcode.com/problems/palindrome-linked-list/
 * @author ccro
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) { // Space:O(1); Time:O(n)
  let nodeFast = head
  let nodeSlow = head 
  let firstPartStr = ''
  let lastPartStr = ''
  /**
    Slow
  1 -> 2 -> 2 -> 1
          Fast
   */
  while (nodeSlow && nodeFast) {
    firstPartStr = nodeSlow.val.toString() + firstPartStr
    if (nodeFast.next) {
      nodeSlow = nodeSlow.next
      nodeFast = nodeFast.next.next      
    } else {
      break
    }
  }
  // now nodeSlow stop at the 2nd part
  let node = nodeSlow
  while (node) {
    lastPartStr += node.val.toString()
    node = node.next
  }
  return firstPartStr === lastPartStr
}

var isPalindrome_old = function(head) { // Space:O(n); Time:O(n)
  let node = head
  let nodeVals = []  // space: O(n)
  while(node) {
    nodeVals.push(node.val.toString())
    node = node.next
  }
  return nodeVals.join('') === nodeVals.reverse().join('') // space:O(n); Time:O(n/2)
};

/**************************/
const { deserialize, serialize } = require('../ListBuilder');

let testCases = [
  {
    input: [1,2],
    output: false
  },
  {
    input: [1,2,2,1],
    output: true
  },
]

let testFuns = {
  isPalindrome  // test on leetcode
}


require('../TestFrame')(testCases, testFuns)