/**
 * @summary 23. Merge k Sorted Lists
 * @description https://leetcode.com/problems/valid-parentheses/
 * @author ccro
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// O(nklognk); N is all numbers count, not very good in time complexity
var mergeKLists = function(lists) {
  let arr = []
  lists.forEach(list_node => {
    let cur_node = list_node
    while (cur_node) {
      arr.push(cur_node.val)
      cur_node = cur_node.next
    }
  })

  if (arr.length < 1) return null

  // sort arr
  arr.sort((a, b) => (a - b))
  // arr to linked list
  let node = new ListNode(arr[0])
  let cur_node = node
  arr.slice(1).forEach(num => {
    cur_node.next = new ListNode(num)
    cur_node = cur_node.next
  })

  return node
};


// use min_heap/priority_queue
var mergeKLists_pq = function(lists) {

}