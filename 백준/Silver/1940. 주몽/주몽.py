n = int(input())
m = int(input())
numbers = list(map(int,input().split()))

numbers.sort()
left = 0
right = n-1
count = 0

while left < right:
    if numbers[left] + numbers[right] == m:
        count += 1
        left += 1
        right -= 1
    elif numbers[left] + numbers[right] < m:
        left += 1
    else:
        right -= 1
        
print(count)