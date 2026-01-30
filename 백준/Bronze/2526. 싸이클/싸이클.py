import sys
input = sys.stdin.readline

n,p = map(int,input().split())

visited = []

cur = n

while cur not in visited:
    visited.append(cur)
    cur = (cur*n) % p
    
cycle_start = visited.index(cur)

print(len(visited)-cycle_start)
    