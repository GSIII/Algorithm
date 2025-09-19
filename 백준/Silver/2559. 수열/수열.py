import sys
input = sys.stdin.readline

n,k = map(int,input().split())
A = [0] + list(map(int,input().split()))
S = [0] * (n+1)
result = 0
max_temp = -float('inf') 

for i in range(1,n+1):
    S[i] = S[i-1] + A[i]

for i in range(k,n+1):
    result = S[i] - S[i-k]
    
    if max_temp < result : max_temp = result

print(max_temp)
