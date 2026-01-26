n = int(input())
start = 1
end = 1
count = 0
total_sum = 1

while start <= n:
    if total_sum == n:
        count += 1
        total_sum -= start
        start += 1
    elif total_sum < n:
        end += 1
        total_sum += end
    else:
        total_sum -= start
        start += 1

print(count)
        