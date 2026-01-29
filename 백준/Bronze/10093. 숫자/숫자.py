a,b = map(int,input().split())
low = min(a,b)
high = max(a,b)

size = max(0,high-low-1)
print(size)
for i in range(low+1, high):

    print(i, end=' ')