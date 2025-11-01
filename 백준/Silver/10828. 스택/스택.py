import sys
input = sys.stdin.readline

N = int(input())

stack = []

for _ in range(N):
    command_line = input().split()
    command = command_line[0]
    
    if command == 'push':
        stack.append(command_line[1])
    elif command == 'pop':
        if not stack:
            print(-1)
        else:
            print(stack.pop())
    elif command == 'size':
        print(len(stack))
    elif command == 'empty':
        if not stack:
            print(1)
        else:
            print(0)
    elif command == 'top':
        if not stack:
            print(-1)
        else:
            print(stack[-1])