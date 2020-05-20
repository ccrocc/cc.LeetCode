/**
 * @summary 350. Intersection of Two Arrays II
 * @description https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @author ccro
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {  // time: O(nlogn) - in sorting
  if (nums1.length < 1 || nums2.length < 1) return []
  let maxArr = [], currMaxArr = [], num1, num2
  nums1.sort((a,b)=>(a-b))
  nums2.sort((a,b)=>(a-b))
  while (nums1.length > 0 && nums2.length > 0) {
    num1 = nums1.pop()
    num2 = nums2.pop()

    if (num1 == num2) {
      currMaxArr.push(num1)
    } else {
      if (currMaxArr.length > maxArr.length)  maxArr = currMaxArr
      num1 > num2 ? nums2.push(num2) : nums1.push(num1) // push back the smaller one
      currMax = []
    }
    // ended
    if (nums1.length == 0 || nums2.length == 0) {
      if (currMaxArr.length > maxArr.length)  maxArr = currMaxArr
      break
    }
  }
  return maxArr
}

var intersectWithMap = function(nums1, nums2) {  // space:O(m); time: O(n)
  // build a map
  let map = {}, rs = []
  nums1.forEach(num => {
    map[num] = (map[num] || 0) + 1
  });
  // we can optimize time by choose min length of (nums1, nums2)
  nums2.forEach(num => {
    if (map[num]) {
      rs.push(num)
      map[num]--
    }
  })
  return rs
}


/**************************/
let testCases = [
  {
    input: [
      [1,2,2,1],
      [2,2]
    ],
    output: [2,2]
  },
  {
    input: [
      [4,9,5],
      [9,4,9,8,4]
    ],
    output: [4,9]
  },
  {
    input: [
      [1],
      [1]
    ],
    output: [1]
  }
]

let testFuns = {
  intersectWithMap: (nums1, nums2) => {
    // In the question, the result can be in any order.
    return intersectWithMap(nums1, nums2).sort((a,b)=>(a-b))
  },
  intersect: (nums1, nums2) => {
    return intersect(nums1, nums2).sort((a,b)=>(a-b))
  }
}

require('../TestFrame')(testCases, testFuns)