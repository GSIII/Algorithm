import sys
input = sys.stdin.readline

text = [list(input().strip()) for _ in range(5)]

result = ''

max_len = max([len(word) for word in text])

for col in range(max_len):
    for row in range(5):
        if col < len(text[row]):
            result += text[row][col]
        
print(result)