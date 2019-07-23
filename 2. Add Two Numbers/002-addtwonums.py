# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        val = 0
        l = rs = ListNode(0)
        while l1 or l2:
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next
            l.next = ListNode(val%10)
            val //= 10
            l = l.next
        
        return rs.next

if __name__ == '__main__':
    l1 = ListNode(2)
    l1.next = ListNode(4)
    l1.next.next = ListNode(3)
    l2 = ListNode(5)
    l2.next = ListNode(6)
    l2.next.next = ListNode(4)
    rs = Solution().addTwoNumbers(l1, l2)
    rs_str = ''
    while rs:
        rs_str += str(rs.val)
        rs = rs.next
        if (rs):
            rs_str += '->'
    
    print rs_str
        