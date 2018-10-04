class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        lookup = {}
        for i, num in enumerate(nums):
          if target-num in lookup:
            return [lookup[target - num], i ]
          lookup[num] = i
    
    
    def twoSum2(self, nums, target):
      for n in nums:
        n_index = nums.index(n)
        rest_nums = nums[n_index+1:]
        m = target - n
        if m in rest_nums:
          return [n_index, n_index+1+rest_nums.index(m)]

 


if __name__ == '__main__':
    print( Solution().twoSum([2, 7, 11, 15], 13) )