def solution(s):
    answer = ""
    middle = len(s) // 2
    if len(s)%2:
        answer = s[middle]
    else:
        answer = s[middle-1]+s[middle]
    return answer