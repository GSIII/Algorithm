max_num = 10000
is_selfNum = [False] * 10001
for n in range(1,max_num+1):
    d = n + sum(map(int,str(n)))
    if d<=max_num:
        
        is_selfNum[d] = True
    
for i in range(1, max_num+1):
    if not is_selfNum[i]:
        print(i)