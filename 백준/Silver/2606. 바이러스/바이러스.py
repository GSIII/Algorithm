import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
r = 1

graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
count = 0

for _ in range(m):
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
            
dfs(r)
print(count-1)