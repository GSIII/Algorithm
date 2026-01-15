import string

text = input()
for char in string.ascii_lowercase:
    if char in text:
        print(text.find(char), end=' ')
    else:
        print(-1, end =' ')