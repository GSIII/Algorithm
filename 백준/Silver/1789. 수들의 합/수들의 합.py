n = int(input())
total = 0
add_num = 1
cnt = 0

while total+add_num <= n:
    total = total+add_num
    add_num += 1
    cnt += 1
print(cnt)