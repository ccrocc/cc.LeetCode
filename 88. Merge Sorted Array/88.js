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

var merge = function (nums1, m, nums2, n) {
  let i = m-- + n-- -1
  while (n >= 0) {
    nums1[i--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
  }
  return nums1
};

var merge_1 = function (nums1, m, nums2, n) {
  if (m == 0) nums1 = [].concat(nums2)
  let [a, b] = [m - 1, n - 1]
  for (let i = m + n - 1; i > 0; i--) {
    if (nums1[a] >= nums2[b]) {
      nums1[i] = nums1[a--]
    } else {
      nums1[i] = nums2[b--]
    }
  }
  // Do not return anything, modify nums1 in-place instead.
  return nums1
};


var merge_2 = function (nums1, m, nums2, n) {
  let j = 0
  let rs = []

  for (let i = 0; i < m; i++) {
    while (j < n && nums1[i] >= nums2[j]) {
      rs.push(nums2[j])
      j++
    }
    rs.push(nums1[i])
  }
  while (j < n) {
    rs.push(nums2[j])
    j++
  }
  // Do not return anything, modify nums1 in-place instead.
  return rs
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
    input: [  // carefully
      [0], 0,
      [1], 1,
    ],
    output: [1],
  },
]

let testFuns = {
  merge,
  // merge_1,
  // merge_2,
}

require('../TestFrame')(testCases, testFuns)