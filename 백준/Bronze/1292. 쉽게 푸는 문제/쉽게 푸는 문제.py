import sys
input = sys.stdin.readline

a,b = map(int,input().split())
result = 0
nums = []

for i in range(1, b+1):
    for j in range(i):
        nums.append(i)
        
        if len(nums) >= b:
            break
    if len(nums) >= b:
        break

S = [0] * (b+1)
for i in range(b):
    S[i+1] = S[i] + nums[i]
result = S[b] - S[a-1]
print(result)