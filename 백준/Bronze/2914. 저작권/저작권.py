a,i = map(int,input().split())
total_melody = a*i
first_line = total_melody - a
n1 = first_line // a
answer = i - n1 + first_line

print(answer)