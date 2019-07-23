class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:   return False
        if x == 0:  return True
        
        x1, rev = x, 0
        while x:
            rev = rev*10 + x%10 
            x /= 10
        
        return x1 == rev

if __name__ == '__main__':
    print( Solution().isPalindrome(-1234321) )