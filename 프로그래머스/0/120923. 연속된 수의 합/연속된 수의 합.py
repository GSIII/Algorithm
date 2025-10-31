def solution(num, total):
    s = sum(range(num))
    x = (total - s) // num
    
    answer = []
    for i in range(num):
        answer.append(x+i)
    
    return answer