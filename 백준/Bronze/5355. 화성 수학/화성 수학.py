T = int(input())
for i in range(0,T):
    arr = list(map(str,input().split()))
    num = float(arr[0])
    for j in range(1,len(arr)):
        if arr[j] == '@' : num *= 3
        elif arr[j] == '%' : num += 5
        elif arr[j] == '#' : num -= 7
        
    print(f'{num:.2f}')