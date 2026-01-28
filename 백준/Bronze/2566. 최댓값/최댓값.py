import sys
input = sys.stdin.readline

board = [list(map(int,input().split())) for _ in range(9)]
max_num = board[0][0]
max_row = 1
max_col = 1

for i in range(len(board)):
    for j in range(len(board[i])):
        if board[i][j] > max_num:
            max_num = board[i][j]
            max_row = i
            max_col = j
            
print(max_num)
print(max_row+1)
print(max_col+1)