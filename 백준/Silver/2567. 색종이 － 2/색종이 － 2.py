import sys
input = sys.stdin.readline

paper = [[0 for _ in range(102)] for _ in range(102)]

n = int(input())
for _ in range(n):
    x,y, = map(int,input().split())
    for i in range(x, x+10):
        for j in range(y, y+10):
            paper[i][j] = 1
            
            
dx = [-1,1,0,0]
dy = [0,0,-1,1]

perimeter = 0

for i in range(1,101):
    for j in range(1,101):
        if paper[i][j] == 1:
            cnt = 0
            for k in range(4):
                nx = i + dx[k]
                ny = j + dy[k]
            
                if paper[nx][ny] == 0:
                    cnt += 1
            perimeter += cnt
            
print(perimeter)