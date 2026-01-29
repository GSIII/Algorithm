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
                # (0,0)에서 (x,y)로 이동하는 과정을 생각하면 한번 이동할때마다(x or y) 색이 반전, 두번 이동하면(x+y) 다시 원래 색
                # 즉 이동횟수가 짝수이면 시작점과 같은 색, 이동횟수 홀수이면 시작점과 반대 색 
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

