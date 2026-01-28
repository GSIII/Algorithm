import sys

# 1. 입력 받기
n, m = map(int, sys.stdin.readline().split())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

# 2. 테트로미노 모양 정의 (상대 좌표)
# 예: ㅡ 모양은 (0,0), (0,1), (0,2), (0,3)
# 모든 회전/대칭을 다 넣으면 복잡하므로 DFS + 'ㅜ'모양 별도 처리가 일반적입니다.

visited = [[False] * m for _ in range(n)]
max_sum = 0

# 상, 하, 좌, 우 방향
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, total, count):
    global max_sum
    # 4칸을 다 채웠으면 최댓값 비교 후 종료
    if count == 4:
        max_sum = max(max_sum, total)
        return

    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            # 'ㅜ' 모양은 DFS로 못 만드므로 별도 처리 (아래 함수)
            if count == 2: # 2번째 칸에서 하나 더 뻗어나가는 방식
                visited[nx][ny] = True
                dfs(x, y, total + board[nx][ny], count + 1)
                visited[nx][ny] = False
            
            visited[nx][ny] = True
            dfs(nx, ny, total + board[nx][ny], count + 1)
            visited[nx][ny] = False

# 전체 칸 순회
for i in range(n):
    for j in range(m):
        visited[i][j] = True
        dfs(i, j, board[i][j], 1)
        visited[i][j] = False

print(max_sum)