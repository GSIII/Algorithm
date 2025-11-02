import sys
input = sys.stdin.readline

N = int(input())
num = list(map(int,input().split()))

min_num = min(num)
max_num = max(num)

print(min_num, max_num)