n = int(input())
count = 0
for _ in range(n):
    words = input().strip()
    seen = set()
    prev = ''
    group = True
    
    for word in words:
        if word != prev:
            if word in seen:
                group = False
                break
            seen.add(word)
            prev = word
            
    if group:
        count += 1
        
print(count)
    