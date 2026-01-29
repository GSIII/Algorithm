cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']
text = input().strip()

for c in cro:
    text = text.replace(c,'*')
    
print(len(text))