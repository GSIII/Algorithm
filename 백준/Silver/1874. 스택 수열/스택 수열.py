import sys
input = sys.stdin.readline

n = int(input())
stack = []
answer = []
current = 1
possible = True

for _ in range(n):
    target = int(input())
    
    while current <= target:
        stack.append(current)
        answer.append('+')
        current += 1
    if stack[-1] == target:
        stack.pop()
        answer.append('-')
    else:
        possible = False
        break

if possible:
    for op in answer:
        print(op)
else:
    print('NO')