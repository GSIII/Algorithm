import math

def solution(n):
    s = math.sqrt(n)
    
    if s%1 == 0:
        return math.pow(s+1,2)
    else:
        return -1