import collections

def solution(participant, completion):
    participant_collections = collections.Counter(participant)
    copletion_collections = collections.Counter(completion)
    answer_collection = participant_collections - copletion_collections
    return list(answer_collection.keys())[0]