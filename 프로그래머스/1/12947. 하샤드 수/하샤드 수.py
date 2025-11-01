def solution(x):
    total_sum = sum(map(int,str(x)))
    if x % total_sum == 0:
        return True
    else:
        return False
        