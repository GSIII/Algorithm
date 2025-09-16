n = int(input())

total = 0
add = 1
cnt = 0

while total+add <= n:
    total = total+add
    add = add+1
    cnt = cnt+1
    
print(cnt)