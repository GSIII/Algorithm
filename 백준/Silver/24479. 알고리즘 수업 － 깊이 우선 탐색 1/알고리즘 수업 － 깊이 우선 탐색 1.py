import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N,M,R = map(int,input().split())

graph = [[] for _ in range(N+1)]

count = 1

visit_order = [0] * (N+1)

for _ in range(M):
    u,v = map(int,input().split())
    graph[u].append(v)
    graph[v].append(u)
    
for i in range(1,N+1):
    graph[i].sort()
    
def dfs(v):
    global count
    
    visit_order[v] = count
    count += 1
    
    for neighbor in graph[v]:
        if visit_order[neighbor] == 0:
            dfs(neighbor)
    
dfs(R)

for i in range(1,N+1):
    print(visit_order[i])