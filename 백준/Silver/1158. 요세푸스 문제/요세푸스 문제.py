import sys
input = sys.stdin.readline
from collections import deque

n,k = map(int,input().split())

mydeque = deque(i for i in range(1,n+1))

result = []

while mydeque:
    mydeque.rotate(-(k-1))
    result.append(mydeque.popleft())

print('<' + ', '.join(map(str,result)) + '>')