import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    is_VPS = True
    ps = input().strip()
    stack = []
    for char in ps:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if not stack:
                is_VPS = False
                break
            else:
                stack.pop()
    if not stack and is_VPS:
        print('YES')
    else:
        print('NO')