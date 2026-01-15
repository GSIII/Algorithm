import sys 
input = sys.stdin.readline

n = int(input())
sizes = list(map(int,input().split()))
t,p = map(int,input().split())

size_cnt = 0

for size in sizes:
    if size % t == 0:
        size_cnt += (size//t)
    else:
        size_cnt += (size//t + 1)
        
print(size_cnt)
print(n//p, n%p)