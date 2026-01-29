arr = [list(map(int,input().split())) for _ in range(10)]
trains = [0] * 11
for i in range(10):
    trains[i] = trains[i-1] - arr[i][0] + arr[i][1]

print(max(trains))