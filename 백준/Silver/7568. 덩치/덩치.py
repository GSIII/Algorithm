n = int(input())

people = []

for _ in range(n):
    w,h = map(int,input().split())
    people.append((w,h))
    
rank = []

for i in range(n):
    count = 0
    for j in range(n):
        if i != j:
            if people[j][0] > people[i][0] and people[j][1] > people[i][1]:
                count += 1
    rank.append(count+1)
print(*rank)