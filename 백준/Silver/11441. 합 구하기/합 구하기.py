import sys
input = sys.stdin.readline

n = int(input())
A = [0] + list(map(int,input().split()))
m = int(input())
S = [0] * (n+1)
answer = 0

for i in range(1,n+1):
    S[i] = S[i-1] + A[i]

for k in range(m):
    i,j = map(int,input().split())
    answer = S[j] - S[i-1]
    print(answer)
    

    