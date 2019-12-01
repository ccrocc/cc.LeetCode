/**
 * @summary 215. Kth Largest Element in an Array
 * @description https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @author ccro
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => (b - a))  //O(nlogn)
  let rs
  // nums.forEach(num => {
  //   console.log('num, k => ', num, k);
  //   if (--k == 0) {
  //     rs = num
  //   }
  // })
  for (let i = 0, len = nums.length; i < len; i++) { // O(k) < O(n)
    if (--k == 0) {
      rs = nums[i]
      break;
    }
  }
  return rs
};


// solution 2: qucick search -> quick select
// two loop, each time let the max of array to be the max one
var findKthLargest_1 = function(nums, k) {
  for (let i = 0; i <= k; i++) {
    let max = i
    for (let j = i; j < nums.length; j++) {
        if (nums[j] > nums[max]) max = j
    }
    [nums[i], nums[max]] = [nums[max], nums[i]]
  }
  return nums[k - 1]
}

// soliution 3. Priority Queue; need 3rd part lib for js
var findKthLargest_2 = function(nums, k) {

}

/**************************/
let testCases = [
  {
    input: [
      [3,2,1,5,6,4],
      2
    ],
    output: 5,
  },
  {
    input: [
      [3,2,3,1,2,4,5,5,6],
      4
    ],
    output: 4,
  },
]

let testFuns = {
  findKthLargest,
  findKthLargest_1
}

require('../TestFrame')(testCases, testFuns)