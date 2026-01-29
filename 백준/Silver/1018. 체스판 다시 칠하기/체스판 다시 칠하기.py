n,m = map(int,input().split())
board = [input() for _ in range(n)]

answer = 64

for i in range(n-7):
    for j in range(m-7):
        repaint_w = 0
        repaint_b = 0
        
        for x in range(8):
            for y in range(8):
                current = board[x+i][y+j]
                
                if (x+y) % 2 == 0:
                    if current != 'W':
                        repaint_w += 1
                    if current != 'B':
                        repaint_b += 1
                else:
                    if current != 'W':
                        repaint_b += 1
                    if current != 'B':
                        repaint_w += 1
        answer = min(answer, repaint_w, repaint_b)
                        
print(answer)