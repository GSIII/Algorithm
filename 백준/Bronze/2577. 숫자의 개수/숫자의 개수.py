import sys
input = sys.stdin.readline

a = int(input())
b = int(input())
c = int(input())

multiple = str(a*b*c)

result = [0] * 10

for num in multiple:
    result[int(num)] += 1
    
for cnt in result:
    print(cnt)
