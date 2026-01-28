import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    data = list(map(int,input().split()))
    case_num = data[0]
    students = data[1:]
    
    move = 0
    
    for i in range(20):
        for j in range(i):
            if students[i] < students[j]:
                move += 1
    print(case_num, move)