/**
 * @summary 84. Largest Rectangle in Histogram
 * @description https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @author ccro
 * @param {number[]} heights
 * @return {number}
 */
// using stack, O(n)
var largestRectangleArea = function (heights) {
  let max_area = 0
  let stack = []
  let len = heights.length

  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      let index = stack.pop()
      if (stack.length > 0) {
        max_area = Math.max(max_area, heights[index] * (i - stack[stack.length - 1] -1) )
      } else {
        max_area = Math.max(max_area, heights[index] * i)
      }
    }
    stack.push(i)
  }
  while (stack.length > 0) {
    let index = stack.pop()
    if (stack.length > 0) {
      max_area = Math.max(max_area, heights[index] * (len - stack[stack.length - 1] - 1))
    } else {
      max_area = Math.max(max_area, heights[index] * len)
    }
  }
  return max_area
};

// divide and conquer; O(nlogn)
var largestRectangleArea_DC = function (heights) {
  // l for left index, r for right index
  let getMaxArea = (heights, l, r) => {
    if (l > r)  return 0
    if (l == r) return heights[l]
    // find min in heights
    // let minHeight = Math.min(...heights.slice(l, r + 1 - l))
    let minIndex = (function (heights, l, r) {
      let minIndex = l
      for (let i = l; i <= r; i++) {
        if (heights[i] < heights[minIndex]) {
          minIndex = i
        }
      }
      return minIndex
    })(heights, l, r)

    return Math.max(
      getMaxArea(heights, l, minIndex - 1),
      (r - l + 1) * heights[minIndex],
      getMaxArea(heights, minIndex + 1, r)
    )
  }

  return getMaxArea(heights, 0, heights.length - 1)
}

/**************************/
let testCases = [
  {
    input: [2, 1, 5, 6, 2, 3],
    output: 10,
  },
  {
    input: [4, 2],
    output: 4,
  },
]


let testFuns = {
  largestRectangleArea,
  largestRectangleArea_DC
}

require('../TestFrame')(testCases, testFuns)