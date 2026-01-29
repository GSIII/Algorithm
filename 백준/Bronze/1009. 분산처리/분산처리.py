t = int(input())
for _ in range(t):
    a,b = map(int,input().split())
    number = pow(a,b,10)
    if number == 0:
        print(10)
    else:
        print(number)