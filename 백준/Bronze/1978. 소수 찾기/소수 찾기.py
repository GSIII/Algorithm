import sys
N = int(input())
numbers = list(map(int,input().split()))
count = 0
for num in numbers:
    cnt = 0
    for i in range(1, num+1):
        if num % i == 0:
            cnt += 1
    if cnt == 2:
        count +=1
print(count)        