/**
 * @summary 237. Delete Node in a Linked List
 * @description https://leetcode.com/problems/delete-node-in-a-linked-list/
 * @author ccro
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};