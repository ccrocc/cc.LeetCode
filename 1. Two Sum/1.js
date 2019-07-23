/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  let i1 = 0, i2 = 0
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let newTarger = target - n
    if (map.has(newTarger)) {
      i1 = map.get(newTarger), i2 = i
      break
    }
    map.set(nums[i], i)
  }
  return (i1 || i2) ? [i1, i2] : null
}; 


/**
 * test, done
 */

// nums = [3, 2, 4]
// target = 6

// console.log(twoSum(nums, target))

/**************************/
var testCases = [
  {
    input: [
      [3, 2, 4],  // nums
      6           // target
    ],
    output: [1, 2]
  },
]

let testFuns = {
  twoSum,
}

require('../TestFrame')(testCases, testFuns)