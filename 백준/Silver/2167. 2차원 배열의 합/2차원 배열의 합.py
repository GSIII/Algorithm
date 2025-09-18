import sys
input = sys.stdin.readline

n,m = map(int,input().split())
A = [[0] * (m+1)]

for i in range(n):
    A_row = [0] + [int(x) for x in input().split()]
    A.append(A_row)
    
k = int(input().strip())
D = [[0] * (m+1) for _ in range(n+1)]
    
for i in range(1, n+1):
    for j in range(1, m+1):
        D[i][j] = D[i-1][j] + D[i][j-1] - D[i-1][j-1] + A[i][j]

for _ in range(k):
    i, j, x, y = map(int,input().split())
    result = D[x][y] - D[i-1][y] - D[x][j-1] + D[i-1][j-1]
    print(result)