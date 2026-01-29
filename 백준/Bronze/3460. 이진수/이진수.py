t = int(input())
for _ in range(t):
    n = int(input())
    binary = bin(n)[2:]
    binary = binary[::-1]
    
    position = []
    for i, bit in enumerate(binary):
        if bit == '1':
            position.append(str(i))
            
    print(" ".join(position))   