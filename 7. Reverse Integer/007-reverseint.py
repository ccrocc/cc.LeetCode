class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x == 0: 
          return 0
        elif x < 0:
          return -self.reverse(-x)
        else:
          rs = 0
          while x:
            rs = rs*10 + x%10 
            x /= 10
          return rs if rs < 2**(32-1) else 0


if __name__ == '__main__':
    print( Solution().reverse(1534236469) )