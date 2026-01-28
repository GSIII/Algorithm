import sys
input = sys.stdin.readline

area = 0
paper = [[0 for _ in range(100)] for _ in range(100)]
for _ in range(4):
    x,y,a,b = map(int,input().split())
    for i in range(min(x,a), max(x,a)):
        for j in range(min(y,b), max(y,b)):
            paper[i][j] = 1
            
for row in paper:
    area += sum(row)
    
print(area)