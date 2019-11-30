/**
 * @summary 206. Reverse Linked List
 * @description https://leetcode.com/problems/reverse-linked-list/
 * @author ccro
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // pre is a temp node, to be point to; while no next, pre is the new head
  /*
  start:
pre  cur/head
 null  [|]   ->   [|]->[|]->[|]->[|]->null
 1. let cur.next = pre
 2. set new pre = cur
 3. set new cur = last cur's next
  */
  let [cur, pre] = [head, null]
  while(cur) {
    [pre, cur.next, cur] = [cur, pre, cur.next]
  }
  return pre
};

 // Definition for singly-linked list.
 function ListNode(val) {
  this.val = val;
  this.next = null;
 }