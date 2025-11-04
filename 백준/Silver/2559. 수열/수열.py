import sys
input = sys.stdin.readline

N,K = map(int,input().split())
temp = [0]+list(map(int,input().split()))
S = [0] * (N+1)
result = 0
max_temp = -float('inf')

for i in range(1,N+1):
    S[i] = S[i-1] + temp[i]
    
for i in range(K,N+1):
    result = S[i] - S[i-K]
    
    if max_temp <result:
        max_temp = result
print(max_temp)