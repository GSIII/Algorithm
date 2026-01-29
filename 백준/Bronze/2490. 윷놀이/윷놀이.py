results = ['D','C','B','A','E']

for _ in range(3):
    plays = list(map(int, input().split()))
    print(results[plays.count(1)])