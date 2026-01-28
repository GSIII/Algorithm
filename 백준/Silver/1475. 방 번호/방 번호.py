import sys
input = sys.stdin.readline

number = input().strip()
cnt = [0] * 10

for c in number:
    cnt[int(c)] += 1
    
six_nine = cnt[6] + cnt[9]
need_6_9 = (six_nine + 1) // 2
cnt[6]=cnt[9]=0

print(max(max(cnt),need_6_9))
