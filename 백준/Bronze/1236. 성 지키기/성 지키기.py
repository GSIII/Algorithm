n,m = map(int,input().split())
board = [input() for _ in range(n)]

row_missing = 0
col_missing = 0

for i in range(n):
    if 'X' not in board[i]:
        row_missing += 1
for j in range(m):
    has_guard = False
    for i in range(n):
        if board[i][j] == 'X':
            has_guard = True
            break
    if not has_guard:
        col_missing += 1
            
print(max(row_missing, col_missing))
       

    