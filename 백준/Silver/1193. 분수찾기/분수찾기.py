x = int(input())

k = 1
while x > k*(k+1) // 2:
    k += 1
    
position = x - (k*(k-1) // 2)

if k % 2 == 0:
    numerator = position
    denominator = k - position + 1
else:
    numerator = k - position + 1
    denominator = position
    
print(f"{numerator}/{denominator}")