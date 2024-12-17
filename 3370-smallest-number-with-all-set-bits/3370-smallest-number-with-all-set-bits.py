class Solution:
    def smallestNumber(self, n: int) -> int:
        def all_has_bits(num):
            return (num&(num+1))==0
        
        
        x=n
        while not all_has_bits(x):
            x+=1
        return x
        