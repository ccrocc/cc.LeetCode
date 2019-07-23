/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let n1 = l1, n2 = l2
  let rs = null
  let current_node = null
  let sum = 0, rest = 0
  while (n1 || n2 || rest) {

    if (!n1) n1 = new ListNode(0) 
    if (!n2) n2 = new ListNode(0)

    sum = rest + n1.val + n2.val
    rest = Math.floor(sum / 10)

    if (!rs) {
      rs = new ListNode(sum % 10)
      current_node = rs
    } else {
      current_node.next = new ListNode(sum % 10)
      current_node = current_node.next
    }

    n1 = n1.next
    n2 = n2.next
  }
  return rs
};

/**************************/
var ListNode = function(val) {
  this.val = val;
  this.next = null;
}

var buildLinkList = function(arr) {

  let list = null, node = null
  if (arr && arr.length > 0) {
    list = new ListNode(arr[0])
    node = list
    for (let i = 1, l = arr.length; i < l; i++) {
      node.next = new ListNode(arr[i])
      node = node.next
    }
  }
  return list
}


/**
 * test, done
 */
// let l1 = new ListNode(2)
// // let node = l1
// // node.next = new ListNode(4)
// // node = node.next
// // node.next = new ListNode(3)
// // node = node.next
// // node.next = new ListNode(8)

// let l2 = new ListNode(5)
//   // l2.next = new ListNode(6)
//   // l2.next.next = new ListNode(4)

// console.log('l1: %j', l1);
// console.log('l2: %j', l2);

// console.log('addTwoNumbers: %j', addTwoNumbers(l1, l2));


/**************************/
var testCases = [
  {
    input: [
      buildLinkList([2, 4, 3]),  // l1
      buildLinkList([5, 6, 4]),  // l2
    ],
    output: buildLinkList([7, 0, 8])
  },
  {
    input: [
      buildLinkList([2]),  // l1
      buildLinkList([5]),  // l2
    ],
    output: buildLinkList([7])
  },
  {
    input: [
      buildLinkList([2, 4, 3, 8]),  // l1
      buildLinkList([5, 6, 4]),  // l2
    ],
    output: buildLinkList([7, 0, 8, 8])
  },
]

let testFuns = {
  addTwoNumbers,
}

require('../TestFrame')(testCases, testFuns)