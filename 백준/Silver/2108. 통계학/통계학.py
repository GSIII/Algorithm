import sys
input = sys.stdin.readline
from collections import Counter

n = int(input())
numbers = [int(input()) for _ in range(n)]

mean = round(sum(numbers)/len(numbers))

numbers.sort()
median = numbers[len(numbers)//2]

counter = Counter(numbers)
max_freq = max(counter.values())
modes = [num for num,freq in counter.items() if freq == max_freq]
modes.sort()
if len(modes) > 1:
    mode = modes[1]
else:
    mode = modes[0]
    
range_num = max(numbers) - min(numbers)

print(mean)
print(median)
print(mode)
print(range_num)