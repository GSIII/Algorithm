n,k = map(int,input().split())

result = 0
numerator = 1
denominator = 1
for i in range(k):
    numerator *= n-i
    denominator *= (i+1)
result = numerator // denominator
print(result)