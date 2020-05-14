/**
 * @summary 200. Number of Islands
 * @description https://leetcode.com/problems/number-of-islands/
 * @author ccro
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) { // O(m*n)
  if (grid.length == 0) return 0  
  let lenX = grid[0].length
  let lenY = grid.length
  let result = 0
  let dsfSearch = function(x, y) {
    if (x < 0 || y < 0 || x >= lenX || y >= lenY || grid[y][x] == 0) return
    grid[y][x] = 0  // has already passed
    dsfSearch(x-1, y) // left
    dsfSearch(x, y-1) // up
    dsfSearch(x+1, y) // right
    dsfSearch(x, y+1) // down
  }

  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      // if is 0, do nothing, to find next 1
      if (grid[j][i] == 1) {  // do a dfs search
        dsfSearch(i, j) // with go through all the nodes around this node
        result++
      }
    }
  }

  return result
};


/**************************/
let testCases = [
  {
    input: [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]],
    output: 1
  },
  {
    input: [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]],
    output: 3
  }
]

let testFuns = {
  numIslands
}

require('../TestFrame')(testCases, testFuns)