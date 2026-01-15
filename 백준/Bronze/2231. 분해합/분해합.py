import sys
input = sys.stdin.readline

n = int(input())
result = 0
start = max(1, n-(9*len(str(n))))

for i in range(start, n):
    digits = [int(d) for d in str(i)]
    if sum(digits) + i == n:
        result = i
        break
print(result)