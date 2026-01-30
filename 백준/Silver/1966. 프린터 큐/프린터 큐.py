import sys
from collections import deque

input = sys.stdin.readline

t = int(input())
    
for _ in range(t):
    n,m = map(int,input().split())
    priorities = list(map(int,input().split()))
    
    q = deque([(priority,idx) for idx, priority in enumerate(priorities)])
    
    count = 0
    
    while q:
        current = q.popleft()
        if any(current[0] < other[0] for other in q):
            q.append(current)
        else:
            count += 1
            if current[1] == m:
                print(count)
                break
