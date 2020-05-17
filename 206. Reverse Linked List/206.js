/**
 * @summary 206. Reverse Linked List
 * @description https://leetcode.com/problems/reverse-linked-list/
 * @author ccro
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

/*
preNode
null
        [/] -> [/] -> [/] -> null
      currNode
1. currNode.next = preNode
2. preNode = currNode
3. currNode = currNode.next; stop while currNode is null
*/
var reverseListX = function(head) {
  let preNode = null, currNode = head
  // let [preNode, currNode] = [null, head]
  while (currNode) {
    let nextNode = currNode.next
    currNode.next = preNode
    preNode = currNode
    currNode = nextNode
    // [currNode.next, preNode, currNode] = [preNode, currNode, currNode.next]
  }
  return preNode
}


/**************************/
const { deserialize, serialize } = require('../ListBuilder');

let testCases = [
  {
    input: [1,2,3,4,5],
    output: [5,4,3,2,1],
  }
]

let testFuns = {
  reverseList: (head) => {
    // for this special test case, we need to parse input and output first
    // guaranteed `mocha` assertions can be used
    let input = deserialize(head)
    let result = reverseList(input)
    let output = serialize(result)
    return output
  }
}

require('../TestFrame')(testCases, testFuns)
