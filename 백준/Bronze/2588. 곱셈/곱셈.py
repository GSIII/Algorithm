a = int(input())
b = int(input())
b_original = b
while b>0:
    c = (b%10) * a
    b = b//10
    print(c)
    
print(a*b_original)