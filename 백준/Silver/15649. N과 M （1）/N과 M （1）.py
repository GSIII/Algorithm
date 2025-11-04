import sys
input = sys.stdin.readline

N,M = map(int,input().split())

visited = [False] * (N+1)

result = []

def dfs():
    if len(result) == M:
        print(" ".join(map(str,result)))
        return
    
    for i in range(1,N+1):
        if not visited[i]:
            result.append(i)
            visited[i] = True
            
            dfs()
            
            visited[i] = False
            result.pop()
            
            
dfs()