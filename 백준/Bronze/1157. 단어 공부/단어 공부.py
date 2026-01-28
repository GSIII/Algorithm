import sys
input = sys.stdin.readline
from collections import Counter

text = input().strip().upper()
counter = Counter(text)

max_cnt = max(counter.values())
most = [k for k,v in counter.items() if v == max_cnt]

print('?' if len(most)>1 else most[0])