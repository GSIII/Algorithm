import sys
input = sys.stdin.readline

n,m = map(int,input().split())
numbers = list(map(int,input().split()))
A = [0] + numbers
S = [0] * (n+1)

for i in range(1,n+1):
    S[i] = S[i-1] + A[i]
    
for i in range(m):
    a,b = map(int,input().split())
    result = S[b] - S[a-1]
    print(result)