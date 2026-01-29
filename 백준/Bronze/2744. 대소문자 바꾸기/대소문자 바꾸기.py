text = input()
result = ''
for ch in text:
    if ch.isupper():
        result += ch.lower()
    else:
        result += ch.upper()
print(result)