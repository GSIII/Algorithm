n = int(input())
scores = list(map(int,input().split()))

max_score = max(scores)

total_sum = 0

for score in scores:
    total_sum += score / max_score * 100

print(total_sum/len(scores))
    