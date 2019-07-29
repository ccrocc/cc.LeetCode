/**
 * @summary 836. Rectangle Overlap
 * @description https://leetcode.com/problems/rectangle-overlap/
 * @author ccro
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  /*
  rec1 [x1, y1, x2, y2]

    ------- [x2, y2]
   |             |
   |             |
[x1, y1]  -------
*/
  return !(rec1[0] >= rec2[2] || rec1[2] <= rec2[0] || rec1[1] >= rec2[3] || rec1[3] <= rec2[1])
};

/**************************/
let testCases = [
  {
    input: [
      [0, 0, 2, 2],
      [1, 1, 3, 3]
    ],
    output: true,
  },
  {
    input: [
      [0, 0, 1, 1],
      [1, 0, 2, 1]
    ],
    output: false,
  },
]

let testFuns = {
  isRectangleOverlap,
}

require('../TestFrame')(testCases, testFuns)