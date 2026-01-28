import sys
input = sys.stdin.readline

n,m = map(int,input().split())
a = [list(map(int,input().split())) for _ in range(n)]
b = [list(map(int,input().split())) for _ in range(n)]

result = []
for i in range(n):
    row = []
    for j in range(m):
        row.append(a[i][j] + b[i][j])
    result.append(row)
    
for row in result:
    print(*row)