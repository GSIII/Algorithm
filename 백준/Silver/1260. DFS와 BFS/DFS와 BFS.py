import sys
sys.setrecursionlimit(10**4)
input = sys.stdin.readline
from collections import deque

N,M,V = map(int,input().split())

graph = [[] for _ in range(N+1)]

visited_dfs = [False] * (N+1)
visited_bfs = [False] * (N+1)

for _ in range(M):
    u,v = map(int,input().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(1,N+1):
    graph[i].sort()
    
def dfs(v):
    visited_dfs[v] = True
    print(v, end=' ')
    
    for neighbor in graph[v]:
        if not visited_dfs[neighbor]:
            dfs(neighbor)

def bfs(start_node):
    queue = deque([start_node])
    visited_bfs[start_node] = True
    
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        
        for neighbor in graph[v]:
            if not visited_bfs[neighbor]:
                queue.append(neighbor)
                visited_bfs[neighbor] = True
dfs(V)
print()
bfs(V)
print()
        
