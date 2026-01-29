n = int(input())

new_num = n
cnt = 0
while True:
    cnt += 1
    a = new_num // 10
    b = new_num % 10
    c = (a+b) % 10
    
    new_num = b*10 + c
    
    if new_num == n:
        break
print(cnt)
    