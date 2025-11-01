def solution(num, total):
    s = sum(range(num))
    x = (total-s) // num
    return [x+i for i in range(num)]