T = int(input())
for _ in range(T):
    R_str, S = input().split()
    R = int(R_str)
    
    result = ''
    for char in S:
        result += char*R
    print(result)