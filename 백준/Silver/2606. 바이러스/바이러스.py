import sys

input = sys.stdin.readline

N = int(input())
M = int(input())
R = 1

graph = [[] for _ in range(N+1)]

visited = [False] * (N+1)

count = 0

for _ in range(M):
    u,v = map(int,input().split())
    graph[u].append(v)
    graph[v].append(u)
    
def dfs(v):
    global count
    
    visited[v] = True
    count += 1
    
    for neighbor in graph[v]:
        if not visited[neighbor]:
            dfs(neighbor)
            
dfs(R)

print(count-1)