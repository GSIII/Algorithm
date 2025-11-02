def solution(s):
    answer = []
    last_seen = {}
    for i, char in enumerate(s):
        if char in last_seen:
            distance = i - last_seen[char]
            answer.append(distance)
        else:
            answer.append(-1)
            
        last_seen[char] = i

    return answer