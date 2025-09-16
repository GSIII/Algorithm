a,b = map(int,input().split())
c = int(input())

total_minutes = a*60 + b + c

a = (total_minutes // 60) % 24
b = total_minutes % 60
print(a, b)