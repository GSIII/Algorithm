import sys
input = sys.stdin.readline

# 1️⃣ 빙고판 입력
board = [list(map(int, input().split())) for _ in range(5)]

# 2️⃣ 사회자가 부르는 숫자 (순서 중요)
calls = []
for _ in range(5):
    calls.extend(map(int, input().split()))

# 3️⃣ 숫자 → 좌표 매핑
pos = {}
for i in range(5):
    for j in range(5):
        pos[board[i][j]] = (i, j)

# 4️⃣ 체크 배열
checked = [[False] * 5 for _ in range(5)]

# 5️⃣ 빙고 개수 세는 함수
def count_bingo():
    bingo = 0

    # 가로
    for i in range(5):
        if all(checked[i]):
            bingo += 1

    # 세로
    for j in range(5):
        if all(checked[i][j] for i in range(5)):
            bingo += 1

    # 대각선
    if all(checked[i][i] for i in range(5)):
        bingo += 1
    if all(checked[i][4 - i] for i in range(5)):
        bingo += 1

    return bingo

# 6️⃣ 숫자 부르기 시뮬레이션
for idx, num in enumerate(calls):
    x, y = pos[num]
    checked[x][y] = True

    if count_bingo() >= 3:
        print(idx + 1)
        break
