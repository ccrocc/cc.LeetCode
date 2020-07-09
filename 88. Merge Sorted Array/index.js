/**
 * @summary 88. Merge Sorted Array
 * @description https://leetcode.com/problems/merge-sorted-array/
 * @author ccro
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) { // O(m+n), fill the nums1 from tail
  let i = nums1.length - 1 //m+n-1
  let i1 = m - 1
  let i2 = n - 1
  while (i2 >= 0) {
    let n1 = nums1[i1]
    let n2 = nums2[i2]
    if (n1 >= n2) {
      nums1[i] = n1
      i1--
    } else {
      nums1[i] = n2
      i2--
    }
    i--
  }
  return nums1
};


/**************************/
let testCases = [
  {
    input: [
      [1, 2, 3, 0, 0, 0], 3,
      [2, 5, 6], 3
    ],
    output: [1, 2, 2, 3, 5, 6],
  },
  {
    input: [
      [0], 0,
      [1], 1,
    ],
    output: [1],
  },
  {
    input: [
      [-1,0,0,3,3,3,0,0,0], 6,
      [1,2,2], 3
    ],
    output: [-1,0,0,1,2,2,3,3,3],
  },
]

let testFuns = {
  merge,
}

require('../TestFrame')(testCases, testFuns)