def gcd(a,b):
    while b != 0:
        a,b = b, a%b
    return a

T = int(input())
for _ in range(T):
    a,b = map(int,input().split())
    num1 = gcd(a,b)
    result = num1 * (a//num1) * (b//num1)
    print(result)
        