import sys
input = sys.stdin.readline

n = int(input())

paper = [[0 for _ in range(1001)] for _ in range(1001)]

for k in range(1,n+1):
    x,y,w,h = map(int,input().split())
    for i in range(x,w+x):
        for j in range(y,h+y):
            paper[i][j] = k
for k in range(1,n+1):
    area = 0
    for row in paper:
        area += row.count(k)
    print(area)