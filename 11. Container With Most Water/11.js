/**
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea_BF = function (height) {
  let max_area = 0
  for (let i = 0, l = height.length; i < l; i++) {
    let area = 0
    for (let j = i + 1; j < l; j++) {
      area = Math.min(height[i], height[j]) * (j - i)
      max_area = Math.max(max_area, area)
    }
  }
  return max_area
};


var maxArea = function (height) {
  let max_area = 0
  let [l, r] = [0, height.length-1]
  let area
  while(l < r) {
    area = (r-l) * Math.min(height[l], height[r])
    max_area = Math.max(area, max_area)
    if (height[r] > height[l])
      l++
    else
      r-- 
  }
  return max_area
};

/**************************/
let testCases = [
  {
    input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    output: 49
  },
  {
    input: [1, 1],
    output: 1
  },
  {
    input: [1, 1, 1],
    output: 2
  },
]

let testFuns = {
  maxArea_BF,
  maxArea
}

require('../TestFrame')(testCases, testFuns)
