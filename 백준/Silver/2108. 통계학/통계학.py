import sys
input = sys.stdin.readline
from collections import Counter

n = int(input())
nums = [int(input()) for _ in range(n)]

mean = round(sum(nums)/len(nums))

nums.sort()
median = nums[len(nums)//2]

counter = Counter(nums)
max_freq = max(counter.values())
modes = [num for num,freq in counter.items() if max_freq == freq]
modes.sort()
if len(modes) > 1:
    mode = modes[1]
else:
    mode = modes[0]
range_num = max(nums) - min(nums)
print(mean)
print(median)
print(mode)
print(range_num)
