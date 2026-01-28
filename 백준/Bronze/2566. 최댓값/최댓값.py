numbers = [list(map(int,input().split())) for _ in range(9)]

max_num = numbers[0][0]
max_col = 1
max_row = 1
for i in range(9):
    for j in range(9):
        if numbers[i][j] > max_num:
            max_num = numbers[i][j]    
            max_row = i+1
            max_col = j+1
        
print(max_num)
print(max_row)
print(max_col)