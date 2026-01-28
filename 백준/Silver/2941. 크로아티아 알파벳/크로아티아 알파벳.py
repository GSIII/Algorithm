import sys
input = sys.stdin.readline

word = input().strip()

cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']

for c in cro:
    word = word.replace(c,'*')
    
print(len(word))