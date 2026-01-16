import sys
input = sys.stdin.readline

n = int(input())

start = max(1, n-(len(str(n))*9))

result = 0
for i in range(start,n):
    digits = list(map(int, str(i)))
    if sum(digits) + i == n:
        result = i
        break
print(result)