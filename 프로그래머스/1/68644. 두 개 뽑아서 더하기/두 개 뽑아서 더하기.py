def solution(numbers):
    sum = 0
    answer_set = set()
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            sum = numbers[i] + numbers[j]
            answer_set.add(sum)
    return sorted(answer_set)
