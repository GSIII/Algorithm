import sys
input = sys.stdin.readline

n = int(input())
A = list(map(int,input().split()))
m = int(input())
S = [0] * n
answer = 0

S[0] = A[0]
for i in range(1,n):
    S[i] = S[i-1] + A[i]

for k in range(m):
    i,j = map(int,input().split())
    start = i-1
    end = j-1
    
    if start == 0:
        answer = S[end]
    else:
        answer = S[end] - S[start-1]
    print(answer)
    

    