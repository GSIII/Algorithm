import sys
input = sys.stdin.readline
from collections import deque

N,M = map(int,input().split())

maze = [list(map(int,input().strip())) for _ in range(N)]

visited = [[0] * M for _ in range(N)]

dx = [-1,1,0,0] 
dy = [0,0,-1,1]

def bfs(start_x, start_y):
    queue = deque([(start_x, start_y)])
    visited[start_x][start_y] = 1
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < N and 0 <= ny < M:
                if maze[nx][ny] == 1 and visited[nx][ny] == 0:
                    visited[nx][ny] = visited[x][y] + 1
                    queue.append((nx,ny))
                    
bfs(0,0)
print(visited[N-1][M-1])