a,b,c = map(int,input().split())
d = int(input())

total_seconds = a*60*60 + b*60 + c + d
a = (total_seconds // 3600) % 24
b = (total_seconds % 3600) // 60
c = (total_seconds % 3600) % 60

print(a, b, c)
