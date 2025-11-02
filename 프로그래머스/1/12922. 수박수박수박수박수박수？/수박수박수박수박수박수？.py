def solution(n):
    answer = ''
    watermelon = '수박'
    if n%2 == 0:
        answer += watermelon * (n//2)
    else:
        answer += watermelon * (n//2) + '수'
    return answer