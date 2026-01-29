from collections import Counter

n = int(input())
first_letter = [input()[0] for _ in range(n)]

counter = Counter(first_letter)

result = [char for char,cnt in counter.items() if cnt >= 5]

if result:
    print(''.join(sorted(result)))
else:
    print('PREDAJA')