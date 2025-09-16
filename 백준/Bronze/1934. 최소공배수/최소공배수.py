def gcd(a,b):
    while b > 0:
        a,b = b, a%b
    return a

T = int(input())

for _ in range(T):
    a,b = map(int,input().split())
    
    divisor = gcd(a,b)
    
    lcm = (a*b) // divisor
    
    print(lcm)
         