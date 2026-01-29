plates = input()
total_height = 10
for i in range(1,len(plates)):
    if plates[i] == plates[i-1]:
        total_height += 5
    else:
        total_height += 10
        
print(total_height)