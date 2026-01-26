import sys
input = sys.stdin.readline

n = int(input())
numbers = list(map(int,input().split()))
numbers.sort()
count = 0

for i in range(n):
    target = numbers[i]
    left = 0
    right = n-1
    while left < right:
        if numbers[left] + numbers[right] == target:
            if left != i and right != i:
                count += 1
                break
            elif left == i:
                left += 1
            elif right == i:
                right -= 1
        elif numbers[left] + numbers[right] > target:
            right -= 1
        else:
            left += 1
            
print(count)