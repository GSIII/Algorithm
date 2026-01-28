import sys
input = sys.stdin.readline

paper = [[0 for _ in range(1001)] for _ in range(1001)]

n = int(input())
for k in range(1,n+1):
    x,y,w,h = map(int,input().split())
    for j in range(y,y+h):
        paper[j][x:x+w] = [k] * w
            
for p in range(1, n+1):
    result = 0
    for cnt in range(1001):
        result += paper[cnt].count(p)
    print(result)

    