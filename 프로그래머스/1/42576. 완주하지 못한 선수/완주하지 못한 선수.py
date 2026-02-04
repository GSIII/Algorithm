from collections import Counter

def solution(participant, completion):
    participant_cnt = Counter(participant)
    completion_cnt = Counter(completion)
    answer_collection = participant_cnt - completion_cnt
    return list(answer_collection.keys())[0]